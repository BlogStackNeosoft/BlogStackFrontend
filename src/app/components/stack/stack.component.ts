import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question, User } from 'src/app/model/model';
import { QnaService } from 'src/app/service/qna.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  search!: string;
  role!: string | null;
  toggleButton: boolean = false;

  constructor(private router: Router, private qnaService: QnaService) { }

  ngOnInit(): void {
    this.role = localStorage?.getItem("role")
    console.log("the role value is", this.role)
    // this.role = localStorage?.getItem("role")
    // console.log("the role value is", this.role)
    this.fetchAllQuestions();
  }

  logout() {
    localStorage.clear();
    Swal.fire('Successfully Logout').then(() => { this.router.navigate([""]) })
  }


  questionList: Question[] = [];
  // ELEMENT_DATA: Question[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Question>(this.questionList);

  //   constructor(
  //     private router: Router,
  // ) { }

  // ngOnInit(): void {
  //   this.role = localStorage?.getItem("role")
  //   console.log("the role value is", this.role)
  //   this.fetchAllQuestions();
  // }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // logout() {
  //   localStorage.clear();
  //   Swal.fire('Successfully Logout').then(() => { this.router.navigate([""]) })
  // }

  fetchAllQuestions(): void {
    this.qnaService.fetchAllQuestions().subscribe((data: { data: { payload: Question[]; }; }) => {
      console.log("Questions", data);
      this.questionList = data.data.payload
      console.log("questionList", this.questionList);

    })
  }

  postQuestion() {
    this.router.navigate(['/post-question'])
  }
}