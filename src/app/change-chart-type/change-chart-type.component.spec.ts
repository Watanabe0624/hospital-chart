import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeChartTypeComponent } from './change-chart-type.component';

describe('ChangeChartTypeComponent', () => {
  let component: ChangeChartTypeComponent;
  let fixture: ComponentFixture<ChangeChartTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeChartTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeChartTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
