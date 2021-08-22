import { Component, OnInit } from '@angular/core';
import GenshinDB from 'genshin-db';
import { HistoryService } from 'src/services/history.service';


@Component({
  selector: 'app-character',
  templateUrl: 'character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {

  info: any;
  material: any;
  searchString: string;

  constructor(private historyService: HistoryService) {}

  searchCharacter = () => {
    var result = this.getAllCharInfo()
    this.searchString = this.searchString.charAt(0).toUpperCase() + this.searchString.slice(1);
    this.info = result.filter(x => x.name.includes(this.searchString))
  }

  ngOnInit(): void {
    this.info = this.getAllCharInfo()

  }
  getAllCharInfo = () => {
    var allCharacters = GenshinDB.characters('names', { matchCategories: true })
    var charInfo = []
    allCharacters.forEach(x => {
      var info = GenshinDB.characters(x)
      var elements = (info.element !== "None") ? GenshinDB.elements(info.element) : GenshinDB.elements("anemo");
      info['elementIcon'] = elements.url;
      charInfo.push(info)
    })
    return charInfo
  }

}
