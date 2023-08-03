import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/model';
import { CategoryService } from 'src/app/service/category-service.service'
import {Router} from '@angular/router'
import { CategorySharedService } from 'src/app/service/category-shared.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = []
  questionData: any
  constructor(private categoryService:CategoryService,
              private router:Router,
              private categorySharedService : CategorySharedService) {
    
   }

  ngOnInit(): void {
    this.categoryService.fetchAll().subscribe((data)=>{
      console.log("inside subscribe")
      console.log(data.data.payload)
      this.categoryList = data.data.payload
    })
  }

  viewAll(data:any){
      // fetch all the questions by category
    //   this.categoryService.getQuestionByCategory(data).subscribe((data)=> {
    //       console.log(data)
    //  })
    //  console.log(this.questionData)
    this.categorySharedService.setCategory(data)
    this.router.navigateByUrl("question-by-id")

  }

}
