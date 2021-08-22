import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GenshinDB from 'genshin-db';

@Component({
  selector: 'app-chardesc',
  templateUrl: 'chardesc.component.html',
  styles: [
  ]
})

export class ChardescComponent implements OnInit {

  charDetails: any;
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfo()
  }
  getInfo = () => {
    let arr = []
    this.name = this.route.snapshot.paramMap.get('name')
    arr.push(GenshinDB.characters(this.name))
    this.charDetails = arr
  }

}
