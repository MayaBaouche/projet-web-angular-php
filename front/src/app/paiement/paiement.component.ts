import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; 
import { Store } from '@ngxs/store';
import { DelAllProducts } from '../common/actions/delAllProducts.action';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  constructor(private store: Store, private route: ActivatedRoute, public router: Router) 
  {}

  ngOnInit() {}
  onPayClick() 
  {
    this.store.dispatch(new DelAllProducts());
    this.router.navigate(['/merci']);
  }
  
}
