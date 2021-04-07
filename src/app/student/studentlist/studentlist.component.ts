import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers:[StudentService]
})
export class StudentlistComponent implements OnInit {

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    console.log(this.studentService.getStudents())
  }

}
