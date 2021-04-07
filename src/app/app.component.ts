import { Component } from '@angular/core';
import { GeneralService } from './core/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyapp';
  constructor(public gs:GeneralService){
    this.gs.getHeroesProducts().subscribe((x)=>{
      console.log(x)
    })
  }
}
