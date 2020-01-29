import { Component , Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'custom-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})

export class FormComponent implements OnInit {
    userDetails : FormGroup; 
    isSubmitted : boolean = false;
    dialCode : String;

    @Input() user : User;     
    createdUser: Observable<User>; 
    test : User;

  constructor(public userService: ApiService) {
        
    this.userDetails = new FormGroup({
      first_name:    new FormControl('', Validators.compose([
                                      Validators.required, 
                                      Validators.pattern('[A-Za-z]{1,32}')
                                  ])),
      last_name:     new FormControl('', Validators.compose([
                                      Validators.required, 
                                      Validators.pattern('[A-Za-z]{1,32}')
                                  ])),
      city:         new FormControl('', Validators.pattern('[A-Za-z]*')),
      country:      new FormControl('', Validators.pattern('[A-Za-z]*')),
      zip_code:    new FormControl('', Validators.pattern('[0-9]{5}')),
      mail:        new FormControl('', Validators.compose([
                                        Validators.required,
                                        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                                  ])),
      login:        new FormControl('', Validators.compose([
                                        Validators.required,
                                        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')
                                  ])), 
      password:     new FormControl('', Validators.compose([
                                        Validators.required,
                                        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
                                    ]))
                                  ,
      phone:  new FormControl('', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')),
      adress:      new FormControl('', Validators.maxLength(256)),
      dialCode:     new FormControl('',Validators.required) 
    });
    }

  // retourne une chaine permettant d'accèder aux controls
  // en la raccourcissant
  get userValidation() { 
    return this.userDetails.controls; 
  } 

  ngOnInit(){    
    this.user = new User();
    this.isSubmitted = false;
  }

  onSubmit(userData: any){
   // if invalid, stop
    if (this.userDetails.invalid) {
      alert("Un ou plusieurs champs sont incorrects!");
      return;
    }
    else 
    {      // sinon on instancie un User et on lui affecte les 
      // valeurs des champs  
      this.user.last_name = this.userDetails.controls['last_name'].value; 
      this.user.first_name = this.userDetails.controls['first_name'].value; 
      this.user.city = this.userDetails.controls['city'].value; 
      this.user.country = this.userDetails.controls['country'].value; 
      this.user.zip_code = this.userDetails.controls['zip_code'].value; 
      this.user.mail = this.userDetails.controls['mail'].value; 
      this.user.login = this.userDetails.controls['login'].value; 
      this.user.password = this.userDetails.controls['password'].value;
      this.user.phone = this.userDetails.controls['phone'].value;
      this.user.adress = this.userDetails.controls['adress'].value;
      this.createdUser = this.userService.addUser(this.user);  
      this.isSubmitted = true; 
    }
  }

}
