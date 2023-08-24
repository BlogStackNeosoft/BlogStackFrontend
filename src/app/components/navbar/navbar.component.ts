import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: String | null | undefined;
  navBarActive: Boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.role = localStorage.getItem("role")

  }

  ngAfterContentChecked() {
    this.role = localStorage?.getItem("role")
    console.log("the role value is", this.navBarActive)
    this.navBarActive = false

    console.log("the role value is", this.navBarActive)

    if (this.router.routerState.root.firstChild?.routeConfig?.path == "blogs") {
      this.navBarActive = true

      console.log("the role value is", this.navBarActive)

    }
    else if (this.router.routerState.root.firstChild?.routeConfig?.path == "stack") {
      this.navBarActive = true

      console.log("the role value is", this.navBarActive)

    }
  }

  toggleSignIn() {
    if (this.role == null) {
      this.router.navigate(["/login"])
    } else {
      Swal.fire('You have successfully logged out').then(() => {
        localStorage.clear()
        this.router.navigate([""])

      })
    }
  }

  updateProfile() {
    this.router.navigate(["update-profile"])
  }

  
  logout() {
    localStorage.clear();
    Swal.fire('Successfully Logout').then(() => { this.router.navigate([""]) })
  }
}