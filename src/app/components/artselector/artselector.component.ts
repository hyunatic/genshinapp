import { Component, OnInit } from '@angular/core';
import GenshinDB from 'genshin-db'
import { ArtifactService } from 'src/services/artifact.service';

@Component({
  selector: 'app-artselector',
  templateUrl: 'artselector.component.html',
  styles: [
  ]
})
export class ArtselectorComponent implements OnInit {

  //Artifact List
  fiveStarArtifactList: any[];
  fourStarArtifactList: any[];

  //CheckBox Display
  flowerArtifactIndex: number = 0
  plumeArtifactIndex: number = 0
  sandArtifactIndex: number = 0
  gobletArtifactIndex: number = 0
  circletArtifactIndex: number = 0
  art2MainIndex: number = 0
  art3MainIndex: number = 0
  art4MainIndex: number = 0

  //Artifact Scroll Level
  flowerLevel: number = 0
  plumeLevel: number = 0
  sandsLevel: number = 0
  gobletLevel: number = 0
  circletLevel: number = 0

  //Artifact Stats
  flowerStats: any
  plumeStats: any
  subStats: any
  mainStats: any


  currentArtifactStats = [
    { mainName: 'HP', mainVal: '717', sub1Name: 'HP', sub1Val: '0', sub2Name: 'HP', sub2Val: '0', sub3Name: 'HP', sub3Val: '0', sub4Name: 'HP', sub4Val: '0', setName: 'Archaic Petra' },
    { mainName: 'ATK', mainVal: '47', sub1Name: 'HP', sub1Val: '0', sub2Name: 'HP', sub2Val: '0', sub3Name: 'HP', sub3Val: '0', sub4Name: 'HP', sub4Val: '0', setName: 'Archaic Petra' },
    { mainName: 'HP', mainVal: '0.07', sub1Name: 'HP', sub1Val: '0', sub2Name: 'HP', sub2Val: '0', sub3Name: 'HP', sub3Val: '0', sub4Name: 'HP', sub4Val: '0', setName: 'Archaic Petra' },
    { mainName: 'HP', mainVal: '0.07', sub1Name: 'HP', sub1Val: '0', sub2Name: 'HP', sub2Val: '0', sub3Name: 'HP', sub3Val: '0', sub4Name: 'HP', sub4Val: '0', setName: 'Archaic Petra' },
    { mainName: 'HP', mainVal: '0.07', sub1Name: 'HP', sub1Val: '0', sub2Name: 'HP', sub2Val: '0', sub3Name: 'HP', sub3Val: '0', sub4Name: 'HP', sub4Val: '0', setName: 'Archaic Petra' },
  ]

  selectedArtifactIndex: number = 0
  selectedSubStatIndex: number = 0
  selectedSubStatNameIndex: number = 0

  constructor(private artifactService: ArtifactService) { }

  ngOnInit(): void {
    this.getArtifactList()
    this.getArtifactStats()
  }
  getArtifactStats = () => {
    this.flowerStats = this.artifactService.getFlowerMainStats()
    this.plumeStats = this.artifactService.getPlumeMainStats()
    this.subStats = this.artifactService.getSubStats()
    this.mainStats = this.artifactService.getOtherMainStats()
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
  changeLevel = (level, item) => {
    if (item === 'flower')
      this.flowerLevel = level
    else if (item === 'plume')
      this.plumeLevel = level
    else if (item === 'sands') {
      this.sandsLevel = level
      this.currentArtifactStats[2].mainVal = this.mainStats[this.art2MainIndex]['level' + this.sandsLevel]
    }
    else if (item === 'goblet') {
      this.gobletLevel = level
      this.currentArtifactStats[3].mainVal = this.mainStats[this.art3MainIndex]['level' + this.gobletLevel]
    }
    else if (item === 'circlet') {
      this.circletLevel = level
      this.currentArtifactStats[4].mainVal = this.mainStats[this.art4MainIndex]['level' + this.circletLevel]
    }
    this.SaveStats()
  }

  //Working Fine
  mainStatChange = (artifactIndex, mainStatIndex) => {
    var setLevel = 0
    if (artifactIndex == 2) {
      this.art2MainIndex = mainStatIndex
      setLevel == this.sandsLevel
    }
    else if (artifactIndex == 3) {
      this.art3MainIndex = mainStatIndex
      setLevel = this.gobletLevel
    }
    else if (artifactIndex == 4) {
      this.art4MainIndex = mainStatIndex
      setLevel = this.circletLevel
    }
    this.currentArtifactStats[artifactIndex].mainName = this.mainStats[mainStatIndex].name
    this.currentArtifactStats[artifactIndex].mainVal = this.mainStats[mainStatIndex]['level' + setLevel]
    this.SaveStats()
  }

  //Name SubStats is working
  ApplySubStats = () => {
    var subStatName = 'sub' + this.selectedSubStatIndex + 'Name'
    this.currentArtifactStats[this.selectedArtifactIndex][subStatName] = this.subStats[this.selectedSubStatNameIndex].subStats
    this.SaveStats()
  }

  ValueChange = (artifactIndex, subStatIndex) => {
    this.selectedArtifactIndex = artifactIndex
    this.selectedSubStatIndex = subStatIndex
    this.ApplySubStats()
  }

  //Working Fine
  SubStatChange = (artifactIndex, subStatNameIndex, subStatIndex) => {
    this.selectedArtifactIndex = artifactIndex
    this.selectedSubStatNameIndex = subStatNameIndex
    this.selectedSubStatIndex = subStatIndex
    this.ApplySubStats()
  }
  setChange = (artifactIndex, setIndex) => {
    this.currentArtifactStats[artifactIndex].setName = this.fiveStarArtifactList[setIndex].name
    this.SaveStats()
  }
  
  SaveStats = () => {
    this.artifactService.saveArtifactList(this.currentArtifactStats)
  }
}
