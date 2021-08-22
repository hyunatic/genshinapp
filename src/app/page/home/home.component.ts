import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }


  username: string
  password: string
  ngOnInit() {

  }
  Login = () => {
    (this.username === "yj" && this.password === "123") ? this.router.navigateByUrl('/loginSuccess') : this.router.navigateByUrl('/loginFailed')
  }

}