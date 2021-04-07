import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm;
  constructor(public fb:FormBuilder,public as:AuthenticationService) {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
   }
  ngOnInit(): void {
    
  }
  logg(){
    this.as.autheticate(this.loginForm.value)
  }
}
