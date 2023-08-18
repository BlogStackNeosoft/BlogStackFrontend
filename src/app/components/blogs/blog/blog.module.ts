import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostBlogsComponent } from './components/post-blogs/post-blogs.component';
import { BaseBlogComponent } from './components/base-blog/base-blog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PostBlogsComponent,
    BaseBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
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
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    PostBlogsComponent,
    BaseBlogComponent
  ],
})
export class BlogModule { }
