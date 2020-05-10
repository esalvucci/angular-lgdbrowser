import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricThingResultComponent } from './historic-thing-result.component';

describe('HistoricThingResultComponent', () => {
  let component: HistoricThingResultComponent;
  let fixture: ComponentFixture<HistoricThingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricThingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricThingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
