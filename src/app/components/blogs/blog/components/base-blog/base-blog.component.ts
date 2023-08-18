import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-base-blog',
  templateUrl: './base-blog.component.html',
  styleUrls: ['./base-blog.component.css']
})

export class BaseBlogComponent implements OnInit {
  search!:string;
  role!:string|null;
  toggleButton:boolean= false;
  @ViewChild('myCityDialog') cityDialog = {} as TemplateRef<any>; 
  dialogRef!: any;
  user!: any;

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
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

  postBlogs(){
    this.router.navigate(["blogs/post-blogs"]);
  }

  questionList: Question[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Question>(this.questionList);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
