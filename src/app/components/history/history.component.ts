import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HistoryService } from 'src/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: 'history.component.html',
  styles: [
  ]
})
export class HistoryComponent implements OnInit {

  @Output() ToggleHistory = new EventEmitter<boolean>();

  charBannerHistory: any;
  weapBannerHistory: any;
  stanBannerHistory: any

  selectedValue: string = "1"
  
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.historyService.charEventBannerHistory.subscribe(x => this.charBannerHistory = x)
    this.historyService.WeaponEventBannerHistory.subscribe(x => this.weapBannerHistory = x)
    this.historyService.standardEventBannerHistory.subscribe(x => this.stanBannerHistory = x)
  }
  GoBack = () => {
    this.ToggleHistory.emit(false)
  }
  selectedDropdown = (e) => {
    
  }

}
