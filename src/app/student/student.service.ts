import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }
  getStudents(){
    return ['praveen','rashi']
  }
}
