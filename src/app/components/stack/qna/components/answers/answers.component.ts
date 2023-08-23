import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/model';
import { CommonSharedService } from 'src/app/service/common-shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  qById! : Question;
  constructor(private commonService: CommonSharedService, private router: Router) { }

  menuListItems : string[] = ["Highest Score","Trending","Date modified","Date created"];
  // selectedMenu !: string;

  @ViewChild('clickmenu', { static: true })
  clickmenu!: MatMenu;

  ngOnInit(): void {
  //  this.commonService.getData().subscribe(data=>{
  //   this.qById = data;
  //   console.log("qById+++",this.qById)
  //   console.log("qById condition",this.qById == null)
  //   if(this.qById == null)
  //   {
  //     Swal.fire("Oops!!! We are redirecting you").then(()=>{
  //       this.router.navigate(['stack/question-list'])
  //     })
  //   }
  //   })
  }

//   clickMenuItem(menuItem : string){
//     console.log(menuItem);
//     this.selectedMenu = menuItem;
// }
}