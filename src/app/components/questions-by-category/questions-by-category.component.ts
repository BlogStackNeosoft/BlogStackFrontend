import { Component, OnInit } from '@angular/core';
import { CategorySharedService } from 'src/app/service/category-shared.service';
import { CategoryService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-questions-by-category',
  templateUrl: './questions-by-category.component.html',
  styleUrls: ['./questions-by-category.component.css']
})
export class QuestionsByCategoryComponent implements OnInit {

  category : string = ''
  constructor(private categorySharedService : CategorySharedService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categorySharedService.getCategory().subscribe(data => {
      this.category = data
    })
    this.categoryService.getQuestionByCategory(this.category).subscribe((data) =>{
      console.log(data.data)
    })
  }

}
