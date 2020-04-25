import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparqlQueryEngineService {

  constructor(private http: HttpClient) { }

  private url = 'http://linkedgeodata.org/sparql';

  sparkql(latitude, longitude) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded')
    headers.append( 'Accept', 'application/json');

    const query = 'Prefix lgdo: <http://linkedgeodata.org/ontology/>\n' +
      'Prefix geom: <http://geovocab.org/geometry#>\n' +
      'Prefix ogc:<http://www.opengis.net/ont/geosparql#>\n' +
      'Select *\n' +
      'From <http://linkedgeodata.org> {\n' +
      '  ?s\n' +
      '    a lgdo:Amenity ;\n' +
      '    rdfs:label ?l ;    \n' +
      '    geom:geometry [\n' +
      '      ogc:asWKT ?g\n' +
      '    ] .\n' +
      '\n' +
      '    Filter(bif:st_intersects (?g, bif:st_point (' + 12.24628 + ',' + 44.13600 + '), 0.1)) .\n' +
      '}';

    const params = new HttpParams().append('query', query).append('format', 'json');

    console.log('prova');

    this.http.get(this.url, {headers: headers, params: params}) // 1
      .subscribe(data => {
        console.log(data);
      });
  }
}

