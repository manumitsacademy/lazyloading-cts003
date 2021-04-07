import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcGuard } from './core/abc.guard';
import { AuthGuard } from './core/auth.guard';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path:'',component:HomepageComponent },
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  { 
    path: 'students', 
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
