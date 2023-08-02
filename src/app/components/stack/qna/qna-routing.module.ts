import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostQuestionsComponent } from './post-questions/post-questions.component';

const routes: Routes = [
  { path: "post-question", component: PostQuestionsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QnaRoutingModule { }
