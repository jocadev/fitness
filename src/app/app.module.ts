import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { WeekActivityComponent } from './week-activity/week-activity.component';

import { HttpClientModule } from '@angular/common/http';
import { DayActivityComponent } from './day-activity/day-activity.component';
import { HeaderComponent } from './header/header.component';
import { HeaderService} from './header/header.service';
import { DayStepService} from './day-activity/day-step.service';
import { FitnessStepsService} from './week-activity/fitness-steps.service';

@NgModule({
  declarations: [
    AppComponent,
    WeekActivityComponent,
    DayActivityComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [HeaderService, DayStepService, FitnessStepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
