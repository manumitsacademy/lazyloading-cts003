import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public http:HttpClient) { }

  getHeroesProducts(){
    var prodObs = this.http.get("http://localhost:9091/products");
    var heroesObs = this.http.get("http://localhost:9091/heroes");
    return forkJoin([prodObs,heroesObs])    
  }
  getCount(){
    return this.http.get("http://localhost:9091/mycounter")
  }
}
