import {Injectable, Input} from '@angular/core';
import {AbstractQuery} from '../shared/models/AbstractQuery';
import {HistoricThingQuery} from '../shared/models/HistoricThingQuery';
import {FilterService} from './filter.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {LatLng, Point} from 'leaflet';
import {MapPoint} from '../shared/models/map-point.model';
import {NominatimResponse} from '../shared/models/nominatim-response.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private filterSource = new Subject();

  // Observable string streams
  resultProduced$ = this.filterSource.asObservable();

  private query: AbstractQuery;
  constructor(private http: HttpClient, private filterService: FilterService) { }

  executeHistoricThingQuery(point: MapPoint) {
    console.log('point');
    console.log(point.longitude + ' ' + point.latitude);
    this.query = new HistoricThingQuery(this.http, this.filterService, point);
    return this.query.executeQuery().subscribe(data => {
      this.filterSource.next(data);
    });

  }
}
