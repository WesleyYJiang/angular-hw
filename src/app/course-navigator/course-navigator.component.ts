import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  modules = [];
  lessons = [];
  widgets = [];
  selectedCourseId = 0;
  selectedModuleId = 0;
  selectedLessonId = 0;
  constructor(private service: CourseNavigatorServiceClient) { }

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules =>
        this.modules = modules);
  }
  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => {
        this.lessons = lessons;
      });
  }
  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.service.findWidgetsForLesson(lessonId)
      .then(widgets => {
        this.widgets = widgets;
      });
  }



  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

}
