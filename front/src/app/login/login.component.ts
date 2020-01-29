import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router'; 
import { User } from '../models/user.model';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connected : boolean = true; 
  credentials: FormGroup;
  constructor(private apiService: ApiService, 
              private route: ActivatedRoute, 
              private router: Router, 
              private store: Store) { }

  ngOnInit() 
  {
    this.credentials = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')
      ]))
   });
  }

  setSession(token: any)
  {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('login', this.credentials.controls['username'].value);
    console.log("BBBB");
    if (sessionStorage.getItem('token') != undefined)  
    {
      this.connected = true;
      this.router.navigate(['/products']);
    }
    else 
    {
      this.connected = false; 
    }
  }

  login()
  {
    this.apiService.login(this.credentials.controls['username'].value, this.credentials.controls['password'].value)
      .subscribe(
        response => this.setSession(response.token),
        err => this.connected = false
      ); 
  }

}

