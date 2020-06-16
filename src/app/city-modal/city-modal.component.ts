import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { AppSettings } from 'src/assets/AppSettings';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.css']
})
export class CityModalComponent implements OnInit {

  city = new FormControl("");
  isValid = true;

  constructor(
    public activeModal: NgbActiveModal,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.getWeatherInformation(this.city.value).subscribe(
      success => {
        this.activeModal.close(
          {
            city: this.city.value,
            weatherInfo: success
          }
        );
      },
      error => {
        this.isValid = false
      }
    );
    //this.activeModal.close(this.city.value);
  }

  getWeatherInformation(city: string){
    let url = AppSettings.API_Path + "&q=" + city;
    return this.http.get(url);
  }

  closeAlert(){
    this.isValid = true;
  }

}
