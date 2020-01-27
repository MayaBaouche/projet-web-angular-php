import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {

  @Output() filter : EventEmitter<String> = new EventEmitter<String>();
  filterName : String = "";

  constructor() { }

  ngOnInit() {
  }

  sendFilterByName(){
    this.filter.emit(this.filterName);
  }

}