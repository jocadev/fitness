import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  public currentDate;
  public currentDay;
  public loadedFeature = 'welcome';
  @Output() featureSelected = new EventEmitter<string>();
  selectedItemId: number;
  constructor( private headerService: HeaderService ) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  ngOnInit() {
  }

  getDayData(day, dayName, event) {
      this.headerService.getCurrentDayData(day, dayName);
      this.setDayData(day, dayName);
      this.loadedFeature = 'day';
      this.onSelect('day');
      this.selectedItemId = day;
  }

  setDayData(day, dayName) {
    this.currentDate = day;
    this.currentDay = dayName;
  }
  backToWelcome() {
    this.loadedFeature = 'welcome';
    this.onSelect('week');
    this.selectedItemId = 1;
  }
}
