import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogStack';
  navBarActive: Boolean = false;
  search!: string;
  role!: string | null;
  toggleButton: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.role = localStorage?.getItem("role")
    // console.log("the role value is", this.role)

  }
  homePage() {
    this.router.navigate(["home"]);
    this.ngOnInit();
  }


  logout() {
    localStorage.clear();
    Swal.fire('Successfully Logout').then(() => { this.router.navigate([""]) })
  }


  ngAfterContentChecked() {
    this.role = localStorage?.getItem("role")
    // console.log("the role value is", this.role)
    this.navBarActive = false
    if (this.router.routerState.root.firstChild?.routeConfig?.path == "blogs") {
      this.navBarActive = false
    }
    else if (this.router.routerState.root.firstChild?.routeConfig?.path == "stack") {
      this.navBarActive = false
    }
    else {
      this.navBarActive = true;
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
}