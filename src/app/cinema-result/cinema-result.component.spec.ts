import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaResultComponent } from './cinema-result.component';

describe('CinemaResultComponent', () => {
  let component: CinemaResultComponent;
  let fixture: ComponentFixture<CinemaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
