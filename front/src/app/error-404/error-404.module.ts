import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error-404.component';

import { RouterModule, Routes } from '@angular/router';

export const errorRoutes:Routes = [
    {
        path: '',
        component: Error404Component
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  declarations: [Error404Component]
})
export class Error404Module { }