import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  search!:string;
  role!:string|null;
  toggleButton:boolean= false;
  @ViewChild('myCityDialog') cityDialog = {} as TemplateRef<any>; 
  dialogRef!: any;
  user!: any;

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.role=localStorage?.getItem("role")
    console.log("the role value is",this.role)
  }

  logout(){
    localStorage.clear();
    Swal.fire('Successfully Logout').then(()=>{this.router.navigate([""])})
  }

openCityDialog() {
 this.dialogRef = this.dialog.open(this.cityDialog,
  { data: this.user, height: '450px', width: '600px' });

  this.dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The blog was closed.');
    console.log(result?.name + ' - ' + result?.city);
  });
} 
}


