import { Component, OnInit } from '@angular/core';
import { FitnessStepsService } from './fitness-steps.service';

@Component({
  selector: 'app-week-activity',
  templateUrl: './week-activity.component.html',
  styleUrls: ['./week-activity.component.scss'],
  providers: [FitnessStepsService]
})

export class WeekActivityComponent implements OnInit {
  public steps: number;
  public calories: number;
  public time: string;
  constructor( private fitnessStepService: FitnessStepsService) {}

  ngOnInit() {
    this.fitnessStepService.getActivityData(11);
    this.setData();
  }

  private getTime(seconds) {
    const numhours = Math.floor((seconds % 86400) / 3600);
    const numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    return numhours + 'h ' + numminutes + 'min';
  }
  private calculateData(steps) {
    this.steps = steps;
    this.calories = Math.round(this.steps * 0.05);
    this.time = this.getTime(this.steps * 0.5);
  }
  private setData() {
    this.fitnessStepService.stepsChanged
      .subscribe(
        (steps) => {
          this.calculateData(steps);
        }
      );
  }
}
