import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { DelProduct } from '../common/actions/delProduct.action';
import { DelAllProducts } from '../common/actions/delAllProducts.action';
import * as _ from 'lodash';
import { count, groupBy, flatMap, toArray, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  quantity : number;
  qtyperart: number;
  articles : Observable<Product[]>;
  isEmpty : Boolean = true;

  constructor(private store: Store) {
    this.store.select(state => state.shoppingCart.shoppingCart).subscribe (u => this.quantity = u.length);
    this.store.select(state => state.shoppingCart.shoppingCart).subscribe (u => this.isEmpty = u.length == 0);
  
    this.articles = this.store.select(state => state.shoppingCart.shoppingCart);
 }
  ngOnInit() {
  }

  onDelClick(article : Product) { 
    this.store.dispatch(new DelProduct(article));
  }
  onAllDelClick() {   
    this.store.dispatch(new DelAllProducts());
  }
  delProduct(article : Product) { 
    this.store.dispatch(new DelProduct(article)); 
  }

}