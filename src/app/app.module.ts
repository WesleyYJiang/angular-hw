import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import {CourseServiceClient} from './services/course.service.client';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { routing } from './app.routing';
import {FormsModule} from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldTwoComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
