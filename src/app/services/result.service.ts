import {Injectable, Input} from '@angular/core';
import {AbstractQuery} from '../shared/models/AbstractQuery';
import {HistoricThingQuery} from '../shared/models/HistoricThingQuery';
import {CinemaQuery} from '../shared/models/CinemaQuery';
import {FilterService} from './filter.service';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {MapPoint} from '../shared/models/map-point.model';
import {RestaurantQuery} from '../shared/models/RestaurantQuery';

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

  executeRestaurantQuery(point: MapPoint) {
    this.query = new RestaurantQuery(this.http, this.filterService, point);
    return this.query.executeQuery().subscribe(data => {
      this.filterSource.next(data);
    });

  }

  executeCinemaQuery(point: MapPoint) {
    this.query = new CinemaQuery(this.http, this.filterService, point);
    return this.query.executeQuery().subscribe(data => {
      this.filterSource.next(data);
    });
  }
}
