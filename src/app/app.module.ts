import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityModalComponent } from './city-modal/city-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CityPanelComponent } from './city-panel/city-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPanelComponent,
    CityModalComponent,
    CityPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
