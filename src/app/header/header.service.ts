import { DayStepService } from '../day-activity/day-step.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private dayStepService: DayStepService) {
  }
   getCurrentDayData(day, dayName) {
     this.dayStepService.getActivityData(day);
  }
}
