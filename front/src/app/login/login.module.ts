import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'; 
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const loginRoutes : Routes = [

  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
