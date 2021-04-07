import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcGuard } from '../core/abc.guard';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {
    path:"",
    component:StudentComponent,
    children:[
      {
        path:"studentlist",
        component:StudentlistComponent
      },
      {
        path:'addstudent',
        component:AddstudentComponent
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
