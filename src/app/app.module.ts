import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { QueriesComponent } from './components/queries/queries.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSmsComponent } from './components/login-sms/login-sms.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/about/contact/contact.component';
import { MapComponent } from './components/about/map/map.component';
import { MissionComponent } from './components/about/mission/mission.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBookComponent } from './components/home/form-book/form-book.component';
import { MenuContainerComponent } from './components/home/menu-container/menu-container.component';
import { MeetOurTeamComponent } from './components/home/meet-our-team/meet-our-team.component';
import { ExploreComponent } from './components/home/explore/explore.component';
import { SectionSatisfyComponent } from './components/home/section-satisfy/section-satisfy.component';
import { SectionMissionComponent } from './components/home/section-mission/section-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    QueriesComponent,
    LoginComponent,
    LoginSmsComponent,
    RegisterComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    MapComponent,
    MissionComponent,
    FormBookComponent,
    MeetOurTeamComponent,
    MenuContainerComponent,
    ExploreComponent,
    SectionSatisfyComponent,
    SectionMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
