import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { StackComponent } from './components/stack/stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AboutComponent } from './components/about/about.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import {RoutingErrorComponent} from './components/routing-error/routing-error.component'
import { CategoryComponent } from './components/category/category.component';
import { ServiceUnavailableComponent } from './components/service-unavailable/service-unavailable.component';
import { QuestionsByCategoryComponent } from './components/questions-by-category/questions-by-category.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "blogs", component: BlogsComponent},
  {path: "stack", component:StackComponent},
  {path: "contact", component:ContactComponent},
  {path: "user-list", component:UserListComponent},
  {path: "update-user", component:UpdateUserComponent},
  {path: "update-profile",component:UpdateProfileComponent},
  {path: "category",component:CategoryComponent},
  {path:"service-unavailable",component: ServiceUnavailableComponent},
  {
    path:'stack',loadChildren:()=>import('../app/components/stack/qna/qna.module').then(m=>m.QnaModule)
  },
  //Please dont move this, error component should be last path 
  {path: "**",component:RoutingErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }