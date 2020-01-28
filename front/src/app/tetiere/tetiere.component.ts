import { Component, Input, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: [ './tetiere.component.css' ]
})
export class TetiereComponent  {
   qty : number ; 
    constructor(public store : Store)
    {
       this.store.select(state => state.shoppingCart.shoppingCart).subscribe (u => this.qty = u.length);
    }
    

}
