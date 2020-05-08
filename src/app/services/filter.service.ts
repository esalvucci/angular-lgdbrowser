import { Injectable } from '@angular/core';
import {Language} from '../shared/models/Language';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  poiType;
  distance;
  language;
  constructor() {
    this.poiType = 'POI Type';
    this.distance = 0.1;
    this.language = 'Language';
  }
}
