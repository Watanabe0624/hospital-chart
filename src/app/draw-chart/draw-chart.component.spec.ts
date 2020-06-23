import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawChartComponent } from './draw-chart.component';

describe('DrawChartComponent', () => {
  let component: DrawChartComponent;
  let fixture: ComponentFixture<DrawChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
