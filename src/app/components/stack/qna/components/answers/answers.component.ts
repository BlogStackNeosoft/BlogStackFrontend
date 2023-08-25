import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { log } from 'console';
import { Question } from 'src/app/model/model';
import { CommonSharedService } from 'src/app/service/common-shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  qById!: Question;


  constructor(private commonService: CommonSharedService, private router: Router) { }

  menuListItems: string[] = ["Highest Score", "Trending", "Date modified", "Date created"];
  // selectedMenu !: string;
  votes: number[] = [];

  @ViewChild('clickmenu', { static: true })
  clickmenu!: MatMenu;

  ngOnInit(): void {
    // this.commonService.getData().subscribe(data => {
    //   this.qById = data;

    //   console.log("upvotes list from backend", this.qById.answers[0].upvote);
    //   console.log("upvotes list from backend", this.qById.answers[1].upvote);

    //   const len = this.qById.answers.length;
    //   console.log("length of votes", len);

    //   for (let i = 0; i <= len - 1; i++) {
    //     this.votes.push(this.qById.answers[i].upvote);
    //   }

    //   console.log("votes list", this.votes)
    //   console.log("qById+++", this.qById)
    //   console.log("qById condition", this.qById == null)
    //   if (this.qById == null) {
    //     Swal.fire("Oops!!! We are redirecting you").then(() => {
    //       this.router.navigate(['stack/question-list'])
    //     })
    //   }
    // })
  }

  ngAfterViewInit():void{
    this.commonService.getData().subscribe(data => {
      this.qById = data;

      console.log("upvotes list from backend", this.qById.answers[0].upvote);
      console.log("upvotes list from backend", this.qById.answers[1].upvote);

      const len = this.qById.answers.length;
      console.log("length of votes", len);

      for (let i = 0; i <= len - 1; i++) {
        this.votes.push(this.qById.answers[i].upvote);
      }

      console.log("votes list", this.votes)
      console.log("qById+++", this.qById)
      console.log("qById condition", this.qById == null)
      if (this.qById == null) {
        Swal.fire("Oops!!! We are redirecting you").then(() => {
          this.router.navigate(['stack/question-list'])
        })
      }
    })
  }

  upvote(v: number): void {

    console.log("upvote clicked");
    console.log(v);

    this.votes[v]++;
    console.log(this.votes)

  }
  downvote(v: number): void {
    console.log("downvote clicked");
    this.votes[v]--;
    console.log(this.votes)
  }

  ngOnDestroy(): void {
    console.log("ng on destroy", this.votes);

  }

}