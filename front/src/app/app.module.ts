import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';

import { HomeModule } from './home/home.module';
import { ListProductsModule } from './list-products/list-products.module';

import { FormModule } from './form/form.module'; 
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module'; 
import { ProductDetailModule } from './product-detail/product-detail.module'; 
import { Error404Module } from './error-404/error-404.module';
import { LoginModule } from './login/login.module'; 
import { PaiementModule } from './paiement/paiement.module'; 

import { ReactiveFormsModule } from '@angular/forms'; 
import { NgxsModule } from '@ngxs/store';

import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartState } from './common/states/shopping-cart.state';

import { ApiService } from './api.service';
import { EspaceClientModule } from './espace-client/espace-client.module';

const routes: Routes = [  
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'products', 
    loadChildren: () => import( './list-products/list-products.module').then(m=> m.ListProductsModule)
  },   
  { 
    path: 'paiement', 
    loadChildren: () => import( './paiement/paiement.module').then(m=> m.PaiementModule)
  },
  { 
    path: 'registration', 
    loadChildren: () => import( './form/form.module').then(m => m.FormModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },    
  {
    path: 'myspace',
    loadChildren: () => import('./espace-client/espace-client.module').then(m => m.EspaceClientModule)
  },
  {
    path: 'shopping-cart', 
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path: 'detail/:id', 
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
  }, 
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: '**', 
    loadChildren: () => import('./error-404/error-404.module').then(m => m.Error404Module)
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HomeModule, ListProductsModule, FormModule, ReactiveFormsModule, ShoppingCartModule, Error404Module, LoginModule, 
  EspaceClientModule, PaiementModule, NgxsModule.forRoot([ShoppingCartState]), RouterModule.forRoot(routes)],
  declarations: [AppComponent, TetiereComponent, FooterComponent],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
