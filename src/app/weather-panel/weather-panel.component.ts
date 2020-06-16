import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityModalComponent } from '../city-modal/city-modal.component';

@Component({
  selector: 'weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  city: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openCityModal(): void {
    let modal = this.modalService.open(CityModalComponent);
    
    modal.result.then(x => {
      this.city = x["weatherInfo"].name;
      debugger
      console.log(x["weatherInfo"])
    },
    () => {

    });
  }

}
