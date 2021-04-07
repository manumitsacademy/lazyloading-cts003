import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = new BehaviorSubject(false);
  constructor(public http:HttpClient,public router:Router) { 
    if(this.isLoggedIn()){
      this.loggedIn.next(true)
    }
  }
  autheticate(user:any){
    this.http.post("http://localhost:9091/authenticateuser",user)
    .subscribe((res:any)=>{
      if(res.message==='authenticuser'){
        this.loggedIn.next(true);
        window.localStorage.setItem('user',JSON.stringify(res.user))
        this.router.navigate([""])
      }
    })
  }
  isLoggedIn(){
    if(window.localStorage.getItem('user')){      
      return true
    }
    else{
      return false
    }
  }
}
