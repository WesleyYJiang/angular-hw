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
  changeName = '';
  changeSeats = '';

  findSectionsForCourse(courseId) {
    // this.sectionService.findSectionsForCourse(courseId)
    //   .then(sections => sections);
    alert(courseId);
  }

  deleteSection(sectionId, courseId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => this.loadSections(courseId));
  }

  updateSection(sectionId, section, courseid) {
    this.sectionService.updateSection(sectionId, section)
      .then(() => {
        this.loadSections(courseid);
      });
  }

  createSection(sectionName, seats, courseid) {
    this
      .sectionService
      .createSection(courseid, sectionName, seats)
      .then(() => {
        this.loadSections(courseid);
      });
  }
  loadSections(courseId) {
    // this.courseId = courseId;
    this.sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections[courseId] = sections);
  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    this.sectionService.findSectionsForCourse(1).then(sections => this.sections = sections);

    // this.sections = this.courses.map((course) => {
    //   return this.findSectionsForCourse(course.id);
    // });

  }

}
