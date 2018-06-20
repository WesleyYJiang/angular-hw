import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../Models/course.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient) { }
  courses: Course[] = [];
  enroll = false;
  enrolled = false;

  ngOnInit() {
   this.courseService.findAllCourses()
     .then(courses => this.courses = courses);
  }
}
