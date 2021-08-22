import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import GenshinDB from 'genshin-db';

@Component({
  selector: 'app-charinfo',
  templateUrl: 'charinfo.component.html', 
  styles: [
  ]
})
export class CharinfoComponent implements OnInit {

  name: string;
  charDetails: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')
    this.getDetails()
  }

  getDetails = () => {
    var char = []
    char.push(GenshinDB.characters(this.name))
    this.charDetails = char
  }

}
