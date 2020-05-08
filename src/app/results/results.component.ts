import {Component, Input} from '@angular/core';
import {MapPoint} from '../shared/models/map-point.model';

@Component({
  selector: 'app-map-point-form',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input()
  mapPoint: MapPoint;

  constructor() {
  }

}
