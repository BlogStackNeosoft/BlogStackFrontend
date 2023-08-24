import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { AnswersComponent } from './components/answers/answers.component';
import { CategoryComponent } from './components/category/category.component';
import { PostQuestionsComponent } from './components/post-questions/post-questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QnaRoutingModule } from './qna-routing.module';


@NgModule({
  declarations: [
    PostQuestionsComponent,
    QuestionListComponent,
    CategoryComponent,
    AnswersComponent,
  ],
  imports: [
    CommonModule,
    QnaRoutingModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,    
    TextFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    QuestionListComponent,
    PostQuestionsComponent,
    CategoryComponent
  ],
})
export class QnaModule { }
