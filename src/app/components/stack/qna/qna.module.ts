import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostQuestionsComponent } from './components/post-questions/post-questions.component';
import { QnaRoutingModule } from './qna-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    PostQuestionsComponent,
    QuestionListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
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
    MatDividerModule
  ],
  exports: [
    QnaRoutingModule,
    QuestionListComponent,
    CategoryComponent,
    PostQuestionsComponent
  ],
})
export class QnaModule { }
