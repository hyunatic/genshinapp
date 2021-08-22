import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { HistoryService } from 'src/services/history.service';

@Component({
  selector: 'app-wish',
  templateUrl: 'wish.component.html',
  styles: [],
})
export class WishComponent implements OnInit {

  //Statistic Variable
  pity90roll: any = 0
  pity10roll: any = 0
  pityFiveStar: any = 0
  pity10RollFiveStar: any = 0

  charpity90roll: any = 0
  charpity10roll: any = 0
  charpityFiveStar: any = 0
  charpity10RollFiveStar: any = 0

  weappity90roll: any = 0
  weappity10roll: any = 0
  weappityFiveStar: any = 0
  weappity10RollFiveStar: any = 0

  //Gacha Variable
  guranteedEventChar: boolean = false
  fourStarChar: boolean = false
  guranteedWeap: boolean = false
  fourStarWeap: boolean = false

  //Banner Variable
  charBannerCounter: any = 0
  standardBannerCounter: any = 0
  bannerData: any;
  weaponBannerSelected: boolean = false
  charBannerSelected: boolean = true
  standBannerSelected: boolean = false

  fiveStar: any = 0
  currentSelectedBanner: string;
  eventBanner: any;

  //Character Inventory Variable
  tenRoll: any[]

  //Design Variable
  banner1: boolean = true
  banner2: boolean = false
  banner3: boolean = false
  wishTriggered: boolean = false
  videoFile: string = ""
  resultDisplay: boolean = false
  detailPage: boolean = false
  historyPage: boolean = false
  bannerChangePage: boolean = false

  constructor(private dataService: DataService, private historyService: HistoryService) { }

  ngOnInit(): void { 
    this.getDefaultEventBanner()
  }
  getDefaultEventBanner = () => {
    var banner = this.dataService.getBannerList()
    this.currentSelectedBanner = banner[0].bannerName
    this.eventBanner = banner[0]
  }

  BannerDetails = () => {
    this.detailPage = true
  }
  detailDisplay = (val: boolean) => {
    this.detailPage = val
  }
  ViewHistory = () => {
    this.historyPage = true
  }
  historyDisplay = (val: boolean) => {
    this.historyPage = val
  }
  ViewBannerChange = () => {
    this.bannerChangePage = true
  }
  ChangeBannerDisplay = (val: any) => {
    this.bannerChangePage = false
    this.eventBanner = val
    this.currentSelectedBanner = val.bannerName
  }

  BannerToggle = (val: number) => {
    if (val === 1) {
      this.banner1 = true
      this.banner2 = false
      this.banner3 = false
      this.currentSelectedBanner = this.eventBanner.bannerName
    }
    else if (val === 2) {
      this.banner1 = false
      this.banner2 = true
      this.banner3 = false
      this.currentSelectedBanner = "epitome-invocation"
    }
    else if (val === 3) {
      this.banner1 = false
      this.banner2 = false
      this.banner3 = true
      this.currentSelectedBanner = "wanderlust-invocation"
    }
  }

  getBannerData = (numOfRolls) => {
    this.bannerData = this.dataService.getBannerData(this.currentSelectedBanner)
    if (this.currentSelectedBanner === "wanderlust-invocation")
      this.StandardWish(numOfRolls)
    else if (this.currentSelectedBanner === "epitome-invocation")
      this.WeaponWish(numOfRolls)
    else
      this.CharacterWish(numOfRolls)
  }

  WeaponWish = (numOfRolls) => {
    let temp = []
    this.tenRoll = []
    for (var i = 0; i < numOfRolls; i++) {
      this.weappity90roll++
      this.weappity10roll++
      var random = Math.random()

      if (this.weappity90roll == 80 || (this.weappity10roll == 10 && random < 0.7 / 6.7) || random < 0.007) {
        if (this.weappity90roll == 80) {
          this.weappityFiveStar++
          temp.push(this.WeaponBannerFiveStar())
        }
        else if (this.weappity10roll == 10 && random < 0.7 / 6.7) {
          this.weappity10RollFiveStar++
          temp.push(this.WeaponBannerFiveStar())
        }
        this.weappity90roll = 0
        this.weappity10roll = 0
        this.fiveStar = 0
      }
      else if (this.weappity10roll == 10) {
        this.weappity10roll = 0
        temp.push(this.WeaponBannerFourStar())
      }
      else if (random < 0.06) {
        this.weappity10roll = 0
        temp.push(this.WeaponBannerFourStar())
      }
      else {
        temp.push(this.WeaponBannerThreeStar())
      }
    }
    this.standardBannerCounter += numOfRolls
    this.tenRoll = temp
    this.historyService.updateWeapHistory(this.tenRoll)
    this.VideoPlayer(numOfRolls)
  }

  StandardWish = (numOfRolls) => {
    let temp = []
    this.tenRoll = []
    for (var i = 0; i < numOfRolls; i++) {
      this.pity90roll++
      this.pity10roll++
      var random = Math.random()

      if (this.pity90roll == 90 || (this.pity10roll == 10 && random < 0.6 / 5.7) || random < 0.006) {
        if (this.pity90roll == 90) {
          this.pityFiveStar++
          temp.push(this.StandardBannerFiveStar())
        }
        else if (this.pity10roll == 10 && random < 0.6 / 5.7) {
          this.pity10RollFiveStar++
          temp.push(this.StandardBannerFiveStar())
        }
        this.pity90roll = 0
        this.pity10roll = 0
        this.fiveStar = 0
      }
      else if (this.pity10roll == 10) {
        this.pity10roll = 0
        temp.push(this.StandardBannerFourStar())
      }
      else if (random < 0.057) {
        this.pity10roll = 0
        temp.push(this.StandardBannerFourStar())
      }
      else {
        temp.push(this.StandardBannerThreeStar())
      }
    }

    this.standardBannerCounter += numOfRolls
    this.tenRoll = temp
    this.historyService.updateStandardHistory(this.tenRoll)
    this.VideoPlayer(numOfRolls)
  }

  CharacterWish = (numOfRolls) => {
    let temp = []
    this.tenRoll = []
    for (var i = 0; i < numOfRolls; i++) {
      this.charpity90roll++
      this.charpity10roll++
      var random = Math.random()

      if (this.charpity90roll == 90 || (this.charpity10roll == 10 && random < 0.6 / 5.7) || random < 0.006) {
        if (this.charpity90roll == 90) {
          this.charpityFiveStar++
          temp.push(this.EventBannerFiveStar())
        }
        else if (numOfRolls == 10 && random < 0.6 / 5.7) {
          this.charpity10RollFiveStar++
          temp.push(this.EventBannerFiveStar())
        }
        this.charpity90roll = 0
        this.charpity10roll = 0
        this.fiveStar = 0
      }
      else if (this.charpity10roll == 10) {
        this.charpity10roll = 0
        temp.push(this.EventBannerFourStar())
      }
      else if (random < 0.057) {
        this.charpity10roll = 0
        temp.push(this.EventBannerFourStar())
      }
      else {
        temp.push(this.EventBannerThreeStar())
      }
    }

    this.charBannerCounter += numOfRolls
    this.tenRoll = temp
    this.historyService.updateCharHistory(this.tenRoll)
    this.VideoPlayer(numOfRolls)
  }

  VideoPlayer = (numOfRolls) => {
    if (numOfRolls == 10) {
      if (this.tenRoll.find(x => x.rating == 5))
        this.videoFile = "5starwish.mp4"
      else if (this.tenRoll.find(x => x.rating == 4))
        this.videoFile = "4starwish.mp4"
    }
    else if (numOfRolls == 1) {
      if (this.tenRoll.find(x => x.rating == 5))
        this.videoFile = "5starwish-single.mp4"
      else if (this.tenRoll.find(x => x.rating == 4))
        this.videoFile = "4starwish-single.mp4"
      else if (this.tenRoll.find(x => x.rating == 3))
        this.videoFile = "3starwish-single.mp4"
    }
    this.wishTriggered = !this.wishTriggered
    setTimeout(() => {
      this.DisplayRolls()
    }, 7000)
  }

  DisplayRolls = () => {
    this.resultDisplay = true
    this.wishTriggered = false
  }

  BackToWish = () => {
    this.resultDisplay = false
  }

  EventBannerFiveStar = () => {
    //Play 50/50
    if (!this.guranteedEventChar) {
      var fiveStarList = this.bannerData.filter(x => x.rating == 5)
      var i = Math.floor(Math.random() * fiveStarList.length)
      //Lost 50/50
      if (i != 0)
        this.guranteedEventChar = !this.guranteedEventChar
      this.fiveStar++
      return fiveStarList[i]
    }
    else if (this.guranteedEventChar) {
      this.guranteedEventChar = !this.guranteedEventChar
      var fiveStarList = this.bannerData.filter(x => x.rating == 5)
      //Index 0 is the Character Banner
      this.fiveStar++
      return fiveStarList[0]
    }
  }
  EventBannerFourStar = () => {
    //Play 50/50
    if (!this.fourStarChar) {
      var fourStarList = this.bannerData.filter(x => x.rating == 4)
      var i = Math.floor(Math.random() * fourStarList.length)
      if (i >= 3)
        this.fourStarChar = !this.fourStarChar
      return fourStarList[i]
    }
    else if (this.fourStarChar) {
      //Guranteed Character in the banner
      var fourStarList = this.bannerData.filter(x => x.rating == 4 && x.type === "character")
      //First 0,1,2 index is the 4 Star Banner
      var i = Math.floor(Math.random() * 3)
      this.fourStarChar = !this.fourStarChar
      return fourStarList[i]
    }
  }
  EventBannerThreeStar = () => {
    var threeStarList = this.bannerData.filter(x => x.rating == 3)
    var i = Math.floor(Math.random() * threeStarList.length)
    return threeStarList[i]
  }

  StandardBannerFiveStar = () => {
    var fiveStarList = this.bannerData.filter(x => x.rating == 5)
    var i = Math.floor(Math.random() * fiveStarList.length)
    this.fiveStar++
    return fiveStarList[i]
  }
  StandardBannerFourStar = () => {
    var fourStarList = this.bannerData.filter(x => x.rating == 4)
    var i = Math.floor(Math.random() * fourStarList.length)
    return fourStarList[i]
  }
  StandardBannerThreeStar = () => {
    var threeStarList = this.bannerData.filter(x => x.rating == 3)
    var i = Math.floor(Math.random() * threeStarList.length)
    return threeStarList[i]
  }

  WeaponBannerFiveStar = () => {
    var x = Math.random()
    if (!this.guranteedWeap) {
      //Lose 75%
      if (x > 0.75) {
        var fiveStarList = this.bannerData.slice(2).filter(x => x.rating == 5)
        var i = Math.floor(Math.random() * fiveStarList.length)
        this.guranteedEventChar = !this.guranteedEventChar
        this.fiveStar++
        return fiveStarList[i]
      }
      else if (x < 0.75) {
        var fiveStarList = this.bannerData.slice(0, 2).filter(x => x.rating == 5)
        var i = Math.floor(Math.random() * fiveStarList.length)
        this.fiveStar++
        return fiveStarList[i]
      }
    }
    else if (this.guranteedWeap) {
      this.guranteedEventChar = !this.guranteedEventChar
      var fiveStarList1 = this.bannerData.filter(x => x.rating == 5)
      //Index 0 is the Character Banner
      this.fiveStar++
      return (x < 0.5) ? fiveStarList1[0] : fiveStarList1[1]
    }
  }
  WeaponBannerFourStar = () => {
    //Play 50/50
    if (!this.fourStarWeap) {
      var fourStarList = this.bannerData.filter(x => x.rating == 4)
      var i = Math.floor(Math.random() * fourStarList.length)
      if (i >= 3)
        this.fourStarWeap = !this.fourStarWeap
      return fourStarList[i]
    }
    else if (this.fourStarWeap) {
      //Guranteed Character in the banner
      var fourStarList = this.bannerData.filter(x => x.rating == 4 && x.type === "weapon")
      //First 0,1,2,3,4 index is the 4 Star Banner
      var i = Math.floor(Math.random() * 5)
      this.fourStarChar = !this.fourStarChar
      return fourStarList[i]
    }
  }
  WeaponBannerThreeStar = () => {
    var threeStarList = this.bannerData.filter(x => x.rating == 3)
    var i = Math.floor(Math.random() * threeStarList.length)
    return threeStarList[i]
  }

}
