import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekActivityComponent } from './week-activity.component';

describe('WeekActivityComponent', () => {
  let component: WeekActivityComponent;
  let fixture: ComponentFixture<WeekActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
