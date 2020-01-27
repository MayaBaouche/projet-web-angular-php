import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; 
import { Product } from '../models/product.model';
import { Observable  } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddProduct } from '../common/actions/addProduct.action';
import 'rxjs/Rx';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  id: number = 0;
  currentProduct : Observable<Product>; 
  products : Observable<Product[]>;

  private quantity: number = 0; 
  @Output() qty : EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private route: ActivatedRoute, private service: ApiService, public router: Router, private store: Store) { }

  ngOnInit() 
  {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.currentProduct =  this.getProduct(); 
  }

  getProduct() : Observable<Product>
  {
    return this.service.getProductById(this.id);
  }
  
  backToProducts()
  {
    this.router.navigate(['/products']);
  } 

  onAddClick(p: Product )  
  {
    this.quantity ++;
    this.store.dispatch(new AddProduct(p)); 
    this.qty.emit(this.quantity);
  }
}
