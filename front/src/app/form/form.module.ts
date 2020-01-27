import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FormErrorDirective } from './field-error.directive';
import { PhoneCodePipe } from './phone.pipe'; 

import { HttpClientModule } from '@angular/common/http';

export const formRoutes:Routes = [
    {
        path: '',
        component: FormComponent
    }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     
    RouterModule.forChild(formRoutes)
  ],
  declarations: [FormComponent, FormErrorDirective, PhoneCodePipe]
})
export class FormModule { }
