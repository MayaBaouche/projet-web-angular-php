import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MerciComponent } from './merci.component';

export const merciRoutes:Routes = [
    {
        path: '',
        component: MerciComponent
    }
];

@NgModule({
  declarations: [MerciComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(merciRoutes)
  ]
})
export class MerciModule { }
