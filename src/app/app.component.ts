import { Component } from '@angular/core';
import { AppSettings, AppType } from 'src/assets/AppSettings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  isModalModeEnabled: boolean;

  constructor(){
    this.isModalModeEnabled = AppSettings.Mode == AppType.Modal;
  }
}
