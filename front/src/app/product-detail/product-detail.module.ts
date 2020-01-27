import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule, Routes } from '@angular/router';

export const detailRoutes:Routes = [
    
        { 
          path: '',
          component: ProductDetailComponent 
        }    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailRoutes)
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
