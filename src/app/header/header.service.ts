import {Injectable} from '@angular/core';
import {FitnessStepsService} from '../week-activity/fitness-steps.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private dayStepService: FitnessStepsService) {
  }
   getCurrentDayData(day, dayName) {
     this.dayStepService.getActivityData(day);
  }

  getCurrentData() {
    this.dayStepService.getActivityData('');
  }
}
