import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldTwoComponent,
    WhiteboardComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseNavigatorServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
