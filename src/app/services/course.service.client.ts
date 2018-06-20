
export class CourseServiceClient {
  REMOTE_URL = 'https://webdev-hw-wj.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.REMOTE_URL).then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.REMOTE_URL + '/' + courseId).then(response => response.json());
  }
}
