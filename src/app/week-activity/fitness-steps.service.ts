import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FitnessActivityModel } from '../fitness-activity.model';

@Injectable({
  providedIn: 'root'
})
export class FitnessStepsService {
   apiURL = 'https://api.myjson.com/bins/1gwnal';
   stepsChanged = new EventEmitter();
   private fitnessSteps: FitnessActivityModel[] = [];
   dayStep = 0;
   constructor(private httpClient: HttpClient) {
   }
   private stepsWalked = 0;
  getActivityData(x) {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get(this.apiURL)
        .toPromise()
        .then(
          response => { // Success
            this.calculateSteps(response);
            this.getDayData(response, x);
            resolve();
          }
        )
        .catch(err => {
          return Promise.reject(err.json().error || 'Server error');
        });
    });
    return promise;
  }
  private calculateSteps(data) {
    for (const responseKey of data) {
      this.fitnessSteps.push(new FitnessActivityModel(responseKey.timestamp, responseKey.steps));
      this.stepsWalked += responseKey.steps;
    }
    this.stepsChanged.emit(this.stepsWalked);
  }

   getDayData(data, x) {
    let date;
    let day;
    let steps = 0;
    for (const responseKey of data) {
      date = new Date(responseKey.timestamp);
      day = date.getDate();
      if (day === x ) {
        steps += responseKey.steps;
      }
      this.dayStep = steps;
    }
    // this.stepsChanged.emit(steps);
  }

}
