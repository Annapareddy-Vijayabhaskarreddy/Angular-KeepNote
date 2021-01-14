import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardleftComponent } from './dashboardleft.component';

describe('DashboardleftComponent', () => {
  let component: DashboardleftComponent;
  let fixture: ComponentFixture<DashboardleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
