import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostQuestionsComponent } from './post-questions/post-questions.component';
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


@NgModule({
  declarations: [
    PostQuestionsComponent
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
  ],
  exports: [
    QnaRoutingModule
  ],
})
export class QnaModule { }
