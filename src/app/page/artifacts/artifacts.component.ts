import { Component, OnInit } from '@angular/core';
import GenshinDB from 'genshin-db'

@Component({
  selector: 'app-artifacts',
  templateUrl: 'artifacts.component.html',
  styles: [
  ]
})
export class ArtifactsComponent implements OnInit {

  fiveStarArtifactList: any[];
  fourStarArtifactList: any[];
  constructor() { }

  ngOnInit(): void {
    this.getArtifactList()
  }
  getArtifactList = () => {
    let arr = []
    var fiveStarList = GenshinDB.artifacts('5', { matchCategories: true })
    var fourStarList = GenshinDB.artifacts('4', { matchCategories: true })
    fiveStarList.forEach(x => arr.push(GenshinDB.artifacts(x)))
    this.fiveStarArtifactList = arr
    arr = []
    fourStarList.forEach(x => arr.push(GenshinDB.artifacts(x)))
    this.fourStarArtifactList = arr
  }

}
