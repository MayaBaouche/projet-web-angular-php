import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  connected : boolean = false ; 
  login : string = ""
  constructor(private route: ActivatedRoute, public router: Router, public apiService : ApiService) 
  { 
    if (sessionStorage.getItem('token') != undefined && sessionStorage.getItem('login') != undefined)
    {
        this.login = sessionStorage.getItem('login');
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
    if (sessionStorage.getItem('login'))
    {
      this.apiService.deleteUser(sessionStorage.getItem('login')).subscribe();
      this.OnDisconnect();
    }
  }
  OnDisconnect() 
  {
      sessionStorage.removeItem('token'); 
      sessionStorage.removeItem('login');  
      this.connected = false;    
      this.router.navigate(['/home']);
  }

}
