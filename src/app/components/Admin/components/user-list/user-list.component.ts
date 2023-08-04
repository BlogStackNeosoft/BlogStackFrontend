import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';
import { Payload, Root, User } from 'src/app/model/model';
import { UserSharedService } from 'src/app/service/user-shared.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  search!:string;
  role!:string|null;
  toggleButton:boolean= false;
  displayedColumns: string[] = ['id','emailId', 'firstName', 'lastName',];
  userList:Payload[]=[]
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;
 
  constructor(
    private userServive: UserService,
    private router: Router,
    private userSharedService:UserSharedService) { }

  ngOnInit(): void {
    this.role=localStorage?.getItem("role")
    console.log("the role value is",this.role)
    this.getUsers();
    // Swal.fire({
    // text:"successfully login",
    // confirmButtonColor:"#f12b20",
    // confirmButtonText:"Ok",
    // background:"black",
    // });
  }

  logout(){
    localStorage.clear();
    Swal.fire('Successfully Logout').then(()=>{this.router.navigate([""])})
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getUsers(){
    this.userServive.fetchAll().subscribe(data=> {
      console.log("fetching all user list"+data.data.payload)
      this.userList=data.data.payload;
      console.log(this.userList)
    })
  }

  updateUser(user: Payload){
    console.log("in update function and the obj is",this.userList);
    this.userSharedService.setUserDetails(user);
    this.router.navigate([`update-user`]);
  }

  deleteUser(user: Payload){
    this.userServive.deleteUser(user?.email_id).subscribe(data => {
    console.log(data);
    Swal.fire('successfully deleted').then(() =>{
      window.location.reload();
    })
    })
  }
}