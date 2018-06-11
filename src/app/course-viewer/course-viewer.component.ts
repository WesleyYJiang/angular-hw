import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../Models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadCourseId(params['courseId']));
  }
  course: Course = new Course();
  loadCourseId(courseId) {
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }

  ngOnInit() {
  }

}
