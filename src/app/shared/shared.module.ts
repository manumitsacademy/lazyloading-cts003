import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainareaComponent, HomepageComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[HeaderComponent,FooterComponent,MainareaComponent]
})
export class SharedModule { }
