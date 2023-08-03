import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-routing-error',
  templateUrl: './routing-error.component.html',
  styleUrls: ['./routing-error.component.css']
})
export class RoutingErrorComponent implements OnInit {

  constructor(private router: Router) { }

  routeToContact(){
    this.router.navigateByUrl("contact")
  }

  routeToLogin(){
    this.router.navigateByUrl("login")
  }

  ngOnInit(): void {
  }


  
  //-----------------------------------

}
