import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/model';
import { CommonSharedService } from 'src/app/service/common-shared.service';
import { QnaService } from 'src/app/service/qna.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  search!: string;
  role!: string | null;
  toggleButton: boolean = false;
  isLoaded : boolean = true;


  constructor(private router: Router, private qnaService: QnaService, private commentService: CommonSharedService) { }

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
    this.qnaService.fetchAllQuestions().subscribe((data) => {
      this.questionList = data.data.payload
      this.isLoaded = false;
    })
  }

  postQuestion() {
    // if(this.role==null){
    //   Swal.fire("Please Login").then(()=>{
    //     this.router.navigate(["/login"])
    //   })
    // }else
    {
      Swal.fire("Please Login").then(()=>{
        this.router.navigate(['/login'])
      })
    }
  }   

  fetchAnswers(id:string){
    console.log("FUNC CALLED"); 
    this.qnaService.fetchQuestionById(id).subscribe((data) =>{
      console.log("Q BY ID",data.data)
      this.commentService.setData(data.data);
    })
  
    this.router.navigate(['stack/answers']);
    
  }
}
