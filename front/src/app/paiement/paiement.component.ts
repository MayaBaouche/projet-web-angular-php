import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { DelAllProducts } from '../common/actions/delAllProducts.action';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  userDetails : FormGroup; 
  constructor(private store: Store, private route: ActivatedRoute, public router: Router) 
  {
    this.userDetails = new FormGroup({
      cardnum:    new FormControl('', Validators.compose([
                                      Validators.required
                                  ])),
      exp_mon:    new FormControl('', Validators.compose([
                                    Validators.required
                                  ])),      
      exp_year:    new FormControl('', Validators.compose([
                                    Validators.required
                                  ])),
      cvc:    new FormControl('', Validators.compose([
                                  Validators.required
                                ])),
      last_name:     new FormControl('', Validators.compose([
                                      Validators.required, 
                                      Validators.pattern('[A-Za-z]{1,32}')
                                  ]))
    });
  }

  ngOnInit() {}

  OnSubmit (){
    // if invalid, stop
      if (this.userDetails.invalid) 
      {
        alert("Un ou plusieurs champs sont incorrects!");
        return;
      }
      else 
      {     
      this.store.dispatch(new DelAllProducts());
      this.router.navigate(['/merci']);
      }
  }
  
}
