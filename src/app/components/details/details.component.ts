import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  @Input('bannerName') bannerName;
  @Output() ToggleDetail = new EventEmitter<boolean>();


  //Display Variable
  bannerToggle: boolean = false;

  //Data
  bannerInfo: any
  ratedFivestar: any
  ratedFourstar: any
  fiveStars: any
  fourStars: any
  threeStars: any

  //Text Cleaning
  cleanBannerName: string = ""


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.bannerToggle = (this.bannerName == "epitome-invocation") ? true : false
    this.CleanBannerName()
    this.GetBannerInfo()
  }

  CleanBannerName = () => {
    var text = this.bannerName.split("-")
    for (var i = 0; i < text.length; i++)
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1, text[i].length)
    this.cleanBannerName = text.join(' ')
  }

  GetBannerInfo = () => {
    this.bannerInfo = this.dataService.getBannerData(this.bannerName)
    this.FormatData()
  }

  FormatData = () => {
    if (!this.bannerToggle) {
      this.ratedFivestar = this.bannerInfo.filter(x => x.rating == 5).slice(0, 1)
      this.ratedFourstar = this.bannerInfo.filter(x => x.rating == 4).slice(0, 3)
      this.fiveStars = this.bannerInfo.filter(x => x.rating == 5)
      this.fourStars = this.bannerInfo.filter(x => x.rating == 4)
      this.threeStars = this.bannerInfo.filter(x => x.rating == 3)
    }
    else{
      this.ratedFivestar = this.bannerInfo.filter(x => x.rating == 5).slice(0, 2)
      this.ratedFourstar = this.bannerInfo.filter(x => x.rating == 4).slice(0, 5)
      this.fiveStars = this.bannerInfo.filter(x => x.rating == 5)
      this.fourStars = this.bannerInfo.filter(x => x.rating == 4)
      this.threeStars = this.bannerInfo.filter(x => x.rating == 3)
    }
  }

  GoBack = () => {
    this.ToggleDetail.emit(false)
  }
}
