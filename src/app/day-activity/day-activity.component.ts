import { Component, OnInit } from '@angular/core';
import { DayStepService } from './day-step.service';

@Component({
  selector: 'app-day-activity',
  templateUrl: './day-activity.component.html',
  styleUrls: ['./day-activity.component.scss']
})
export class DayActivityComponent implements OnInit {
  private currentDay;
  private currentDate;
  private stepsPerDay;
  private kmPerDay;
  private calPerDay;
  private hPerDay;
  constructor(private stepSer: DayStepService) {
  }

  ngOnInit() {
    this.setData();
  }
  private getDayData(day, dayName) {
    this.stepSer.getActivityData(day);
    this.currentDay = dayName;
    this.currentDate = day;
  }
  private calculateData(steps) {
    this.stepsPerDay = steps;
    this.kmPerDay = Math.round((steps * 0.762) / 1000).toFixed(1);
    this.calPerDay = Math.round(steps * 0.05);
    this.hPerDay = ((steps * 0.5) / 3600).toFixed(1);
  }
  private setData() {
    this.stepSer.stepsChanged
      .subscribe(
        (steps) => {
          this.calculateData(steps);
      }
    );
  }
}

