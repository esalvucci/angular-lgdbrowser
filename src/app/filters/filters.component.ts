import {Component, Input, OnInit} from '@angular/core';
import {FilterService} from '../services/filter.service';
import {ResultService} from '../services/result.service';
import {MapPoint} from '../shared/models/map-point.model';
import {NominatimResponse} from '../shared/models/nominatim-response.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input()
  mapPoint: MapPoint;

  constructor(private filter: FilterService, private resultService: ResultService) {}

  ngOnInit() {
  }

  setPOIType(event) {
    this.filter.poiType = event.target.value;
    this.search();
  }

  setLanguage(event) {
    this.filter.language = event.target.value;
    this.search();
  }

  setDistance(event) {
    this.filter.distance = event.target.value;
    this.search();
  }

  search() {
    console.log(this.filter.poiType);
    if (this.filter.poiType === 'HistoricThing') {
      this.searchHistoricThing();
    } else if (this.filter.poiType === 'Cinema') {
      this.searchCinema();
    } else if (this.filter.poiType === 'Restaurant') {
      this.searchRestaurant();
    }
  }

  private searchHistoricThing() {
    this.resultService.executeHistoricThingQuery(this.mapPoint);
  }

  private searchCinema() {
    this.resultService.executeCinemaQuery(this.mapPoint);
  }

  private searchRestaurant() {
    this.resultService.executeRestaurantQuery(this.mapPoint);
  }
}
