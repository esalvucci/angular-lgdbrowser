import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparqlQueryEngineService {

  constructor(private http: HttpClient) { }

  private url = 'http://linkedgeodata/sparql';

  sparkql(latitude, longitude) {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });

    const params = new HttpParams();
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
      '    Filter(bif:st_intersects (?g, bif:st_point (' + 44.13600 + ',' + 12.24628 + '), 0.1)) .\n' +
      '}'
    params.append('query', query);
    params.append('format', 'json');

    const options = {
      'headers': headers,
      'params': params
    };

    console.log("prova");

    this.http.get(this.url, options) // 1
      .subscribe(data => {
        console.log(data);
      });
  }
}

