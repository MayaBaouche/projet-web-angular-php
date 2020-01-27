import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  connected : boolean = false ; 
  constructor() 
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

  ngOnInit() {
  }

}
