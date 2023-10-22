import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserComponent } from './component/user/user.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PostComponent } from './component/post/post.component';
import { CommentComponent } from './component/comment/comment.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FeedComponent } from './component/feed/feed.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserComponent,
    ProfileComponent,
    PostComponent,
    CommentComponent,
    NavbarComponent,
    FeedComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'accounts/register', component: SignupComponent},
      {path: 'accounts/login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UserComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'myposts', component: PostComponent},
      {path: 'mycomments', component: CommentComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
