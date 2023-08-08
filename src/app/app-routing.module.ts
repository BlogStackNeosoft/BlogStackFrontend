  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './components/home/home.component';
  import { LoginComponent } from './components/login/login.component';
  import { BlogsComponent } from './components/blogs/blogs.component';
  import { StackComponent } from './components/stack/stack.component';
  import { ContactComponent } from './components/contact/contact.component';
  import { UpdateUserComponent } from './components/update-user/update-user.component';
  import { AboutComponent } from './components/about/about.component';
  import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
  import {RoutingErrorComponent} from './components/routing-error/routing-error.component'
  import { ServiceUnavailableComponent } from './components/service-unavailable/service-unavailable.component';
import { CategoryComponent } from './components/stack/qna/components/category/category.component';
import { UserListComponent } from './components/Admin/components/user-list/user-list.component';
import { AdminDashboardComponent } from './components/Admin/components/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

  const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "login", component: LoginComponent },
    { path:"forgot", component: ForgotPasswordComponent },
    { path: "blogs", component: BlogsComponent },
    {
      path: "stack", component: StackComponent,
      loadChildren: () => import('../app/components/stack/qna/qna.module').then(m => m.QnaModule)
    },
    { path: "contact", component: ContactComponent },
    { path: "user-list", component: UserListComponent },
    { path: "update-user", component: UpdateUserComponent },
    { path: "update-profile", component: UpdateProfileComponent },
    { path: "category", component: CategoryComponent },
    { path: "service-unavailable", component: ServiceUnavailableComponent },
    {
      path: 'admin',component:AdminDashboardComponent, loadChildren: () => import('../app/components/Admin/admin.module').then(m => m.AdminModule)
    },
    //Please dont move this, error component should be last path 
    { path: "**", component: RoutingErrorComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }