import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,public as:AuthenticationService) {
    this.as.loggedIn.subscribe((s)=>{
      console.log(s);
      this.loginStatus=s;
    })
  }
  loginStatus?:boolean;
  ngOnInit(): void {
  }
  logout(){
    window.localStorage.clear();
    this.as.loggedIn.next(false)
    this.router.navigate([""])
  }
}
