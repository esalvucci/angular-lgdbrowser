import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NominatimResponse} from '../shared/models/nominatim-response.model';
import {SparqlQueryEngineService} from '../services/sparql-query-engine.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

  @Input()
  results: NominatimResponse[];

  @Output()
  locationSelected = new EventEmitter();

  constructor(private sparqlQueryEngineService: SparqlQueryEngineService) {}

  selectResult(result: NominatimResponse) {
    this.locationSelected.emit(result);
    this.sparqlQueryEngineService.sparkql(result.latitude, result.longitude);

  }

}
