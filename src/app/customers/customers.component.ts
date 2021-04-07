import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralService } from '../core/general.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public gs:GeneralService) { }
  timer1:any;
  x=new Subscription();
  ngOnInit(): void {
    this.timer1 = setInterval(()=>{
      this.x = this.gs.getCount().subscribe(c=>{console.log(c)})
    },2000)
    
  }
  ngOnDestroy(){
    this.x.unsubscribe();
    clearInterval(this.timer1)
  }
}
