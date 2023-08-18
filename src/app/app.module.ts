import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/Admin/admin.module';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtpValidationComponent } from './components/otp-validation/otp-validation.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RoutingErrorComponent } from './components/routing-error/routing-error.component';
import { ServiceUnavailableComponent } from './components/service-unavailable/service-unavailable.component';
import { QuestionsByCategoryComponent } from './components/stack/qna/components/questions-by-category/questions-by-category.component';
import { QnaModule } from './components/stack/qna/qna.module';
import { StackComponent } from './components/stack/stack.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { AuthService } from './service/auth.service';
import { NgOtpInputModule } from 'ng-otp-input';
import {MatDialogModule} from '@angular/material/dialog';
import { BlogModule } from './components/blogs/blog/blog.module';


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
        ForgotPasswordComponent,
        OtpValidationComponent,
        ResetPasswordComponent
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
        QnaModule,
        AdminModule,
        BlogModule,
        NgOtpInputModule,
        MatDialogModule,
       
    ],

exports: [StackComponent, BlogsComponent],

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