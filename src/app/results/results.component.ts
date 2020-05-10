import {Component, Input} from '@angular/core';
import {MapPoint} from '../shared/models/map-point.model';
import {FilterService} from '../services/filter.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input()
  mapPoint: MapPoint;

  constructor(private filterService: FilterService) {}

}
