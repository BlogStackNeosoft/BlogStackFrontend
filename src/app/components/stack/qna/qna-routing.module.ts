import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostQuestionsComponent } from './components/post-questions/post-questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionsByCategoryComponent } from './components/questions-by-category/questions-by-category.component';
import { AnswersComponent } from './components/answers/answers.component';

const routes: Routes = [
  { path: "post-question", component: PostQuestionsComponent },
  { path: "", component: QuestionListComponent },
  { path: "question-list", component:QuestionListComponent},
  {path: "categories", component: CategoryComponent},
  {path: "question-by-category", component: QuestionsByCategoryComponent },
  {path:"",component:QuestionListComponent},
  { path: "categories", component: CategoryComponent },
  { path: "answers", component : AnswersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QnaRoutingModule { }
