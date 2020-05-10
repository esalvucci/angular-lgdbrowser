import {Component, Input, OnInit} from '@angular/core';
import {ResultService} from '../services/result.service';
import {FilterService} from '../services/filter.service';
import {HistoricThing} from '../shared/models/HistoricThing';
import {MapPoint} from '../shared/models/map-point.model';

@Component({
  selector: 'app-historic-thing-result',
  templateUrl: './historic-thing-result.component.html',
  styleUrls: ['./historic-thing-result.component.scss']
})
export class HistoricThingResultComponent implements OnInit {

  historicThings: HistoricThing[] = [];

  constructor(private filter: FilterService, private resultService: ResultService) {
    this.resultService.resultProduced$.subscribe(data => {
      this.setData(data);
    });

  }

  ngOnInit() {
  }

  setData(data) {
    console.log('into setData' + data);
    this.historicThings = data.results.bindings;
    console.log(data);
    const badString = 'Il template {{Coord}} ha riscontrato degli errori (istruzioni):Modulo:Wikidata:398: attempt to index field \'wikibase\' (a nil value)';
    this.historicThings.forEach(h => {
      if (h.abstract.value.includes(badString) ) {
        h.abstract.value = h.abstract.value.replace(badString, '');
      }
    });

    console.log('end of setData');
  }

  isDefined(data): boolean {
    return data !== undefined;
  }
}

