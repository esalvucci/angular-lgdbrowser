import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

abstract class AbstractQuery {

  constructor(private http: HttpClient) { }

  private url = 'http://sparql.org/sparql.html';

  query(latitude, longitude) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded')
    headers.append( 'Accept', 'application/json');

    const query = this.getQueryString();

    const params = new HttpParams().append('query', query).append('format', 'json');

    console.log('prova');

    this.http.get(this.url, {headers: headers, params: params}) // 1
      .subscribe(data => {
        console.log(data);
      });
  }

  abstract getQueryString();
}
