import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBlogsComponent } from './components/post-blogs/post-blogs.component';
import { BlogsComponent } from '../blogs.component';
import { BaseBlogComponent } from './components/base-blog/base-blog.component';

const routes: Routes = [
  {path: "", component:BaseBlogComponent},
  {path: "post-blogs", component:PostBlogsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { 
}
