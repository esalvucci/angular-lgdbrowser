import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GeocodingComponent} from './geocoding/geocoding.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NominatimService} from './services/nominatim-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MapComponent} from './map/map.component';
import {ResultsComponent} from './results/results.component';
import {ResultsListComponent} from './results-list/results-list.component';
import { FiltersComponent } from './filters/filters.component';
import { HistoricThingResultComponent } from './historic-thing-result/historic-thing-result.component';
import { RestaurantResultComponent } from './restaurant-result/restaurant-result.component';
import { CinemaResultComponent } from './cinema-result/cinema-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocodingComponent,
    MapComponent,
    ResultsComponent,
    ResultsListComponent,
    FiltersComponent,
    HistoricThingResultComponent,
    RestaurantResultComponent,
    CinemaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule
  ],
  providers: [
    NominatimService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
