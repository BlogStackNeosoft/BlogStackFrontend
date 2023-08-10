import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/model/model';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[]=[];

  constructor(
    private blogService:BlogService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.blogService.getAllBlogs().subscribe(data=>{
      this.blogs=data.data.payload;
    })
  }

  deleteBlog(blogId:string){
    this.blogService.deleteBlog(blogId).subscribe(data=>{
      console.log("DELETED")
      console.log(data)
      this.router.navigate(['blog-list'])
    })
  }
}
