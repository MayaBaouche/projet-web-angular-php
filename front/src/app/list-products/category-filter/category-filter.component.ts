import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  private categories : Observable<Category[]>;
  @Output() categoryName : EventEmitter<String> = new EventEmitter<String>();

  constructor(public service: ApiService)
  {
    this.categories = this.service.getCategories(); 
  }

  getCategoryName(event : any)
  {
    this.categoryName.emit(event.target.value);
  }

  ngOnInit() {
  }

}
