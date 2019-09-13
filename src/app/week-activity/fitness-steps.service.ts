import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FitnessActivityModel } from '../fitness-activity.model';

@Injectable()
export class FitnessStepsService {
   apiURL = 'https://api.myjson.com/bins/1gwnal';
   stepsChanged = new EventEmitter();
   private fitnessSteps: FitnessActivityModel[] = [];
   constructor(private httpClient: HttpClient) {
   }
   private stepsWalked = 0;
  getActivityData() {
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get(this.apiURL)
        .toPromise()
        .then(
          response => { // Success
            this.calculateSteps(response);
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
}
