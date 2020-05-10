import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../shared/models/Restaurant';
import {FilterService} from '../services/filter.service';
import {ResultService} from '../services/result.service';

@Component({
  selector: 'app-restaurant-result',
  templateUrl: './restaurant-result.component.html',
  styleUrls: ['./restaurant-result.component.scss']
})
export class RestaurantResultComponent implements OnInit {

  restaurants: Restaurant[] = [];
  constructor(private filter: FilterService, private resultService: ResultService) {
    this.resultService.resultProduced$.subscribe(data => {
      this.setData(data);
    });

  }

  ngOnInit() {
  }

  setData(data) {
    this.restaurants = [];
    this.restaurants = data.results.bindings;
  }

  isDefined(data): boolean {
    return data !== undefined;
  }
}

