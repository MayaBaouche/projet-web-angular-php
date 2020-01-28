import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '@ngxs/store';
import { AddProduct } from '../common/actions/addProduct.action';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent 
{  
  private products : Observable<Product[]>;
  private filtered : Observable<Product[]>;
  private isEmpty : boolean = false;
  private quantity : number = 0; 

  categorySelected : string = ""; 
  filterName : string = ""
  @Output() qty: EventEmitter<number> = new EventEmitter<number>();

  constructor(public listProductService: ApiService, private store: Store) 
  {    
    this.filtered = this.listProductService.getProductsByFilters("", ""); 
  }

  searchProductByName(filterValue : string)
  {
    this.filterName = filterValue; 
    this.filtered = this.listProductService.getProductsByFilters(this.filterName, this.categorySelected);           
  }
  
  searchProductsByCategory(categoryName : string)
  {
      this.categorySelected = categoryName;
      this.filtered = this.listProductService.getProductsByFilters(this.filterName, this.categorySelected);
  } 
   
   onAddClick(p : Product)  
  {  
      this.store.dispatch(new AddProduct(p)); 
      this.qty.emit(this.quantity);
  }
}
