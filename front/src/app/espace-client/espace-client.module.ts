import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspaceClientComponent } from './espace-client.component'; 
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export const espaceClientRoutes : Routes = [
  {
    path: '',
    component: EspaceClientComponent
  }
];


@NgModule({
  declarations: [EspaceClientComponent],
  imports: [
    CommonModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    RouterModule.forChild(espaceClientRoutes)
  ]
})
export class EspaceClientModule { }
