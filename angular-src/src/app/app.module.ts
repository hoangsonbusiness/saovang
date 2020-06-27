import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SubjectListModule } from './components/subject-list/subject-list.module'

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AuthService as Auth} from './auth/auth.service';
import { CourseService } from './service/course.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { JumpbotronComponent } from './components/jumpbotron/jumpbotron.component';
import { CourseIndexComponent } from './components/course-index/course-index.component';
import { CourseManageComponent } from './components/course-manage/course-manage.component';
import { DocsManageComponent } from './components/docs-manage/docs-manage.component';
import { NewsManageComponent } from './components/news-manage/news-manage.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { CourseManageAddComponent } from './components/course-manage-add/course-manage-add.component';
import { CourseManageListComponent } from './components/course-manage-list/course-manage-list.component';
import { CourseManageUpdateComponent } from './components/course-manage-update/course-manage-update.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectListAddComponent } from './components/subject-list-add/subject-list-add.component';
import { TraineeCourseComponent } from './components/trainee-course/trainee-course.component';
import { TraineeCourseListComponent } from './components/trainee-course-list/trainee-course-list.component';
import { TraineeCourseAddComponent } from './components/trainee-course-add/trainee-course-add.component';

const appRoutes: Routes =  [
  { path:'', component: HomeComponent },
  { path: 'trang-chu', component: HomeComponent },
  { path:'dang-nhap', component: LoginComponent },
  { path:'khoa-hoc/:id', component: CourseDetailComponent },
  { path:'quan-ly', component: DashboardComponent , canActivate: [AuthGuard],
    children:[
      { path:'khoa-hoc', component:CourseManageComponent , canActivate: [AuthGuard],
        children:[ 
          {
            path:'danh-sach', component:CourseManageListComponent , canActivate: [AuthGuard]
          },
          {
            path:'them-moi', component:CourseManageAddComponent , canActivate: [AuthGuard]
          },
          {
            path:':id', component:CourseManageUpdateComponent , canActivate: [AuthGuard]
          }
        ]
      },
      { path:'mon-hoc', component:SubjectComponent , canActivate: [AuthGuard],
        children:[ 
          {
            path:'danh-sach', component:SubjectListComponent , canActivate: [AuthGuard]
          }
        ]
      },
      { path:'khoa-sinh-vien', component:TraineeCourseComponent , canActivate: [AuthGuard],
        children:[ 
          {
            path:'danh-sach', component:TraineeCourseListComponent , canActivate: [AuthGuard]
          }
        ]
      },
      { path:'tai-lieu', component:DocsManageComponent , canActivate: [AuthGuard] },
      { path:'tin-tuc', component:NewsManageComponent , canActivate: [AuthGuard] },
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    ContactComponent,
    FeedbackComponent,
    PromotionComponent,
    JumpbotronComponent,
    CourseIndexComponent,
    CourseManageComponent,
    DocsManageComponent,
    NewsManageComponent,
    DashboardMenuComponent,
    CourseManageAddComponent,
    CourseManageListComponent,
    CourseManageUpdateComponent,
    SidebarComponent,
    CourseDetailComponent,
    SubjectComponent,
    SubjectListComponent,
    SubjectListAddComponent,
    TraineeCourseComponent,
    TraineeCourseListComponent,
    TraineeCourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    CKEditorModule,
    JwtModule.forRoot({
      config: {
      },
    }),
    FileUploadModule,
    NgxPaginationModule,
    // SubjectListModule
  ],
  providers: [
    AuthGuard, 
    Auth, 
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
