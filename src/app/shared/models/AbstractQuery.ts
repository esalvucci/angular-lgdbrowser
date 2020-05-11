import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FilterService} from '../../services/filter.service';
import {MapPoint} from './map-point.model';

export abstract class AbstractQuery {

  constructor(private http: HttpClient, private filterService: FilterService, private point: MapPoint) { }

  private url = 'https://api.nextprot.org/sparql?default-graph-uri=&named-graph-uri=&';

  executeQuery() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded')
    headers.append( 'Accept', 'application/json');

    const query = this.getQueryString(this.filterService.distance,
                                      this.filterService.language,
                                      this.filterService.maxNumberOfResults,
                                      this.point);
    console.log(query);
    const params = new HttpParams().append('query', query).append('output', 'json');

    return this.http.get(this.url, {headers: headers, params: params});
  }

  abstract getQueryString(distance, language, numberOfResults, point);
}
