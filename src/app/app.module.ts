import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StackComponent } from './components/stack/stack.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AboutComponent } from './components/about/about.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ServiceUnavailableComponent } from './components/service-unavailable/service-unavailable.component';
import { RoutingErrorComponent } from './components/routing-error/routing-error.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { QnaModule } from './components/stack/qna/qna.module';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { AuthService } from './service/auth.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CategoryComponent } from './components/stack/qna/components/category/category.component';
import { QuestionsByCategoryComponent } from './components/stack/qna/components/questions-by-category/questions-by-category.component';
import { AdminModule } from './components/Admin/admin.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        NavbarComponent,
        BlogsComponent,
        StackComponent,
        ContactComponent,
        UserProfileComponent,
        UpdateUserComponent,
        UpdateProfileComponent,
        RoutingErrorComponent,
        ServiceUnavailableComponent,
        QuestionsByCategoryComponent,
        ForgotPasswordComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        QnaModule,
        AdminModule
    ],

exports: [StackComponent],

providers: [AuthService,
  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }
],
bootstrap: [AppComponent]
})
export class AppModule { }