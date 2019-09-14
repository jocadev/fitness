import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { WeekActivityComponent } from './week-activity/week-activity.component';

import { HttpClientModule } from '@angular/common/http';
import { DayActivityComponent } from './day-activity/day-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekActivityComponent,
    DayActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
