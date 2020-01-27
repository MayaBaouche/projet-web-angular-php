import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent} from './shopping-cart.component';

import { RouterModule, Routes } from '@angular/router';

export const cartRoutes:Routes = [
    
        { 
          path: '',
          component: ShoppingCartComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ],
  declarations: [ ShoppingCartComponent]
})
export class ShoppingCartModule { }