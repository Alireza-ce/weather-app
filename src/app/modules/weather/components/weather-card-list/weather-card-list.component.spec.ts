import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardListComponent } from './weather-card-list.component';

describe('WeatherCardListComponent', () => {
  let component: WeatherCardListComponent;
  let fixture: ComponentFixture<WeatherCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
