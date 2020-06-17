import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppSettings } from 'src/assets/AppSettings';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'city-panel',
  templateUrl: './city-panel.component.html',
  styleUrls: ['./city-panel.component.css']
})
export class CityPanelComponent implements OnInit {

  editable: boolean = false;
  cityControl = new FormControl("");
  isValid = true;
  image: string;
  weather: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  editCity(){
    this.editable = true;
  }

  dismiss(){
    this.editable = false;
    this.isValid = true;
  }

  fetch(){
    
    let url = AppSettings.API_Path + "&q=" + this.cityControl.value;
    this.http.get(url)
    .pipe(
      finalize(() =>
        setTimeout(() => {
          this.fetch();
        }, 3000)
      )
    )
    .subscribe(
      success => {
        this.editable = false;
        this.weather = success
        this.image = this.getImage(this.weather.weather[0].main);
        this.isValid = true;
      },
      error => {
        this.isValid = false
      }
    );
  }

  getImage(weather: string){
    if(weather == "Clear"){
      return "/assets/images/clear.jpg"
    }
    else if(weather == "Rain"){
      return "/assets/images/rainy.jpg"
    }
    else if(weather == "Clouds"){
      return "/assets/images/cloudy.jpg"
    }
  }

  getCurrentTemperature(){
    if(this.weather == undefined){
      return "";
    }
    else{
      return this.getTemperature(this.weather.main.temp);
    }
  }

  getMinimumTemperature(){
    if(this.weather == undefined){
      return "";
    }
    else{
      return this.getTemperature(this.weather.main.temp_min);
    }
  }

  getMaximumTemperature(){
    if(this.weather == undefined){
      return "";
    }
    else{
      return this.getTemperature(this.weather.main.temp_max);
    }
  }

  getTime(){
    if(this.weather == undefined){
      return "";
    }
    else{
      return new Date(parseInt(this.weather.dt) * 1000).toLocaleTimeString()
    }
  }

  getTemperature(value){
    return value + "° C";
  }

  closeAlert(){
    this.isValid = true;
  }

}
