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
    this.modalService.open(CityModalComponent)
    .close(x => console.log(x))
  }

}
