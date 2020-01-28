import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  connected : boolean = false ; 

  constructor(private route: ActivatedRoute, public router: Router) 
  { 
    if (sessionStorage.getItem('token') != undefined && sessionStorage.getItem('login') != undefined)
    {
        this.connected = true; 
    }
    else 
    {
        this.connected = false; 
    }
  }

  ngOnInit() 
  {
  }
  OnDeleteAccount()
  {

  }
  OnDisconnect() 
  {
      sessionStorage.removeItem('token'); 
      sessionStorage.removeItem('login');  
      this.connected = false;    
      this.router.navigate(['/home']);
  }

}
