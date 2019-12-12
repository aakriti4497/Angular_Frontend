import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeodashboardComponent } from './deodashboard.component';

describe('DeodashboardComponent', () => {
  let component: DeodashboardComponent;
  let fixture: ComponentFixture<DeodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
