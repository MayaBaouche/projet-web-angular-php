import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { DelProduct } from '../common/actions/delProduct.action';
import { DelAllProducts } from '../common/actions/delAllProducts.action';
import { ActivatedRoute, Router} from '@angular/router'; 

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  quantity : number;
  articles : Observable<Product[]>;
  products : Map<number, number> = new Map<number, number>();
  isEmpty : Boolean = true;
  total : number = 0;

  constructor(private store: Store, private route: ActivatedRoute, public router: Router) 
  { 
    this.store.select(state => state.shoppingCart.shoppingCart).subscribe (u => this.quantity = u.length);
    this.store.select(state => state.shoppingCart.shoppingCart).subscribe (u => this.isEmpty = u.length == 0);
    this.articles = this.store.select(state => state.shoppingCart.shoppingCart);
  }
  ngOnInit() 
  {
    this.products.forEach(p =>
      {
          this.total += p; 
      });
  }

  onDelClick(article : Product) 
  { 
    this.total = this.total -  this.products.get(article.idconfiserie);
    this.store.dispatch(new DelProduct(article));
  }
  onAllDelClick() 
  {   
    this.store.dispatch(new DelAllProducts());
  }
  calculateTotal(id : number, p : number, e : any)
  {
    this.total = 0;
    this.products.set(id, p * e.target.value);
    this.products.forEach(p =>
      {
          this.total += p; 
      });
  }
  onPayClick()
  {
    this.router.navigate(['/paiement']);
  }
}