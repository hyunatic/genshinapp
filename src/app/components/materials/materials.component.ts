import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: 'materials.component.html',
  styles: [
  ]
})
export class MaterialsComponent implements OnInit {

  matList: any
  name: string
  charMats: any
  ascesionMats: any
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAscensionMaterials()
    this.displayItem()
  }
  getAscensionMaterials = () => {
    this.matList = this.dataService.getAscensionMats()
    this.name = this.route.snapshot.paramMap.get('name')
    this.charMats = this.dataService.getCharMats(this.name)
    console.log(this.matList)
    console.log(this.charMats)
  }
  displayItem = () => {
    var displayObj = {
      specialItem: this.matList[this.charMats['specialty']].name,
      specialItempic: this.charMats['specialty'] + ".png",
      commonItem1: this.matList[this.charMats['common'] + "_1"].name,
      commonItem1pic: this.matList[this.charMats['common'] + "_1"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      commonItem2: this.matList[this.charMats['common'] + "_2"].name,
      commonItem2pic: this.matList[this.charMats['common'] + "_2"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      commonItem3: this.matList[this.charMats['common'] + "_3"].name,
      commonItem3pic: this.matList[this.charMats['common'] + "_3"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      talentboss: this.matList[this.charMats['talent_boss']].name,
      talentbossPic: this.charMats['talent_boss'] + ".png",
      talentBook1: this.matList[this.charMats['talent_book'] + "_1"].name,
      talentBook1pic: this.matList[this.charMats['talent_book'] + "_1"].name.replace(/\s+/g, '_').replace(/["']/g, "").toLowerCase() + ".png",
      talentBook2: this.matList[this.charMats['talent_book'] + "_2"].name,
      talentBook2pic: this.matList[this.charMats['talent_book'] + "_2"].name.replace(/\s+/g, '_').replace(/["']/g, "").toLowerCase() + ".png",
      talentBook3: this.matList[this.charMats['talent_book'] + "_3"].name,
      talentBook3pic: this.matList[this.charMats['talent_book'] + "_3"].name.replace(/\s+/g, '_').replace(/["']/g, "").toLowerCase() + ".png",
      crystal1: this.matList[this.charMats['type']+ "_crystal_1"].name,
      crystal1pic: this.matList[this.charMats['type']+ "_crystal_1"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      crystal2: this.matList[this.charMats['type']+ "_crystal_2"].name,
      crystal2pic: this.matList[this.charMats['type']+ "_crystal_2"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      crystal3: this.matList[this.charMats['type']+ "_crystal_3"].name,
      crystal3pic: this.matList[this.charMats['type']+ "_crystal_3"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
      crystal4: this.matList[this.charMats['type']+ "_crystal_4"].name,
      crystal4pic: this.matList[this.charMats['type']+ "_crystal_4"].name.replace(/\s+/g, '_').toLowerCase() + ".png",
    }
    console.log(displayObj)
    this.ascesionMats = displayObj
  }

}
