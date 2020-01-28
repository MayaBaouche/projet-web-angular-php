import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiementComponent} from './paiement.component';

import { RouterModule, Routes } from '@angular/router';

export const paiementRoutes:Routes = [
    
        { 
          path: '',
          component: PaiementComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paiementRoutes)
  ],
  declarations: [ PaiementComponent]
})
export class PaiementModule { }