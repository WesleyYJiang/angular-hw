import { Component, OnInit } from '@angular/core';
import {Course} from '../Models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private courseService: CourseServiceClient, private sectionService: SectionServiceClient) { }
  courses: Course[] = [];
  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];

  findSectionsForCourse(courseId) {
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

  }

}
