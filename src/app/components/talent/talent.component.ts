import { Component, OnInit } from '@angular/core';
import GenshinDB from 'genshin-db';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-talent',
  templateUrl: 'talent.component.html',
  styles: [
  ]
})
export class TalentComponent implements OnInit {

  name: string;
  selectedChar: any;
  basicLevel: number = 1;
  elementLevel: number = 1;
  burstLevel: number = 1;
  talents: any;
  combat1: any;
  combat2: any;
  combat3: any;

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')
    this.GetDetails();
  }

  GetDetails = () => {
    let talentDetails: { [key: string]: any } = GenshinDB.talents(this.name)
    let allTalents: { [key: string]: any } = {};
    let talents = {};
    for (const stat of ["combat1", "combat2", "combat3"]) {
      let talentMultiplier: any[] = []
      for (var label of talentDetails[stat].attributes.labels) {
        if (!["CD", "Energy", "Duration"].some(substring => label.includes(substring))) {
          let Params = this.getParamList(label)
          let values = [];
          for (const param of Params) {
            values.push(talentDetails[stat].attributes.parameters[param])
          }
          talentMultiplier.push({ [label]: values })
        }
      }
      allTalents[stat] = talentMultiplier

    }
    if (talents !== allTalents) {
      this.talents = allTalents
      this.combat1 = this.FilterText(this.talents.combat1)
      this.combat2 = this.FilterText(this.talents.combat2)
      this.combat3 = this.FilterText(this.talents.combat3)
    }
  }
  getParamList(testString: string) {
    var result = [];
    var i = 1;
    do {
      let test = this.getParamName(testString, i);
      if (test !== undefined) {
        result.push(test)
        i++
      }
    }
    while (this.getParamName(testString, i) !== undefined);
    //console.log(result)
    return result;
  }
  getParamName(label: string, occurence: number) {
    let index = 0;
    while (occurence > 0) {
      index = label.indexOf("param", index + 1);
      if (index === -1) return undefined;
      occurence--;
    }
    return label.substring(index, index + 6);
  }
  FilterText = (arr) => {
    var result = []
    for (var i in arr) {
      var val = arr[i];
      for (var j in val) {
        var sub_key = j;
        var sub_val = val[j];
        var name = sub_key.split("|")
        var Json = { name: name[0], dmg: sub_val }
        result.push(Json)
      }
    }
    return result
  }
}
