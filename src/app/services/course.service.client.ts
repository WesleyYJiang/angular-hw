
export class CourseServiceClient {
  COURSE_URL = 'https://webdev-hw-wj.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
