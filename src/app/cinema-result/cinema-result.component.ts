import { Component, OnInit } from '@angular/core';
import {FilterService} from '../services/filter.service';
import {ResultService} from '../services/result.service';
import {Cinema} from '../shared/models/Cinema';

@Component({
  selector: 'app-cinema-result',
  templateUrl: './cinema-result.component.html',
  styleUrls: ['./cinema-result.component.scss']
})
export class CinemaResultComponent implements OnInit {

  cinemas: Cinema[] = [];
  constructor(private filter: FilterService, private resultService: ResultService) {
    this.resultService.resultProduced$.subscribe(data => {
      this.setData(data);
    });

  }

  ngOnInit() {
  }

  setData(data) {
    this.cinemas = [];
    this.cinemas = data.results.bindings;
  }

  isDefined(data): boolean {
    return data !== undefined;
  }
}

