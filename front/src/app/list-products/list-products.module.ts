import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListProductsComponent } from './list-products.component';
import { FilterProductsComponent} from './filter-products/filter-products.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';

export const productsRoutes:Routes = [    
        { 
          path: '',
          component: ListProductsComponent 
        }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [ ListProductsComponent, FilterProductsComponent, CategoryFilterComponent], 
  exports: [RouterModule]
})
export class ListProductsModule { }
