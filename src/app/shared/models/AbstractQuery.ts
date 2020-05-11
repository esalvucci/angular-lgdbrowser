import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FilterService} from '../../services/filter.service';
import {Point} from 'leaflet';
import {MapPoint} from './map-point.model';
import {NominatimResponse} from './nominatim-response.model';

export abstract class AbstractQuery {

  constructor(private http: HttpClient, private filterService: FilterService, private point: MapPoint) { }

  private url = 'https://demo.openlinksw.com/sparql/?default-graph-uri=&query=';

  executeQuery() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded')
    headers.append( 'Accept', 'application/json');

    const query = this.getQueryString(this.filterService.distance,
                                      this.filterService.language,
                                      this.filterService.maxNumberOfResults,
                                      this.point);
    console.log(query);
    const params = new HttpParams().append('query', query).append('format', 'json');

    return this.http.get(this.url, {headers: headers, params: params});
  }

  abstract getQueryString(distance, language, numberOfResults, point);
}
