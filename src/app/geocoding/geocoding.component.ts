import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NominatimService} from '../services/nominatim-service';
import {NominatimResponse} from '../shared/models/nominatim-response.model';
import {fromEvent} from 'rxjs';
import {
  debounceTime,
  map} from 'rxjs/operators';

@Component({
  selector: 'app-geocoding',
  templateUrl: './geocoding.component.html',
  styleUrls: ['./geocoding.component.scss']
})
export class GeocodingComponent implements AfterViewInit {

  @ViewChild('search',  {static: false}) search: ElementRef;
  @Output() onSearch = new EventEmitter();
  searchResults: NominatimResponse[];

  constructor(private nominatimService: NominatimService) {
  }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keyup').
      pipe(
        map((event: any) => event.target.value),
        debounceTime(1200)).subscribe((address: string) => /* this.addressLookup(address)*/ console.log(address));
  }

  addressLookup(address: string) {
    if (address.length > 3) {
      this.nominatimService.addressLookup(address).subscribe(results => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
    this.onSearch.emit(this.searchResults);
  }

}
