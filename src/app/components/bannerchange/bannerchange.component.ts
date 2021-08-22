import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-bannerchange',
  templateUrl: 'bannerchange.component.html',
  styles: [
  ]
})
export class BannerchangeComponent implements OnInit {

  @Output() ToggleBannerChange = new EventEmitter<any>();
  bannerList: any
  selectedIndexBanner: number = 0
  selectedBanner: any

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.bannerList = this.dataService.getBannerList()
    this.selectedBanner = this.bannerList[this.selectedIndexBanner]
  }

  onActiveSlideChange = (e) => {
    this.selectedIndexBanner = e.relatedTarget// Get Index of slide
    this.selectedBanner = this.bannerList[this.selectedIndexBanner]
  }
  SelectBanner = () => {
    this.ToggleBannerChange.emit(this.selectedBanner)
  }
}
