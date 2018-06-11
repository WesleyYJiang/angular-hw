export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch
    ('http://localhost:8080/api/course')
      .then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch
    ('http://localhost:8080/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }
  findLessonsForModule(moduleId) {
    return fetch
    ('http://localhost:8080/api/module/'
      + moduleId + '/lesson')
      .then(response => response.json());
  }
  findWidgetsForLesson(lessonId) {
    return fetch
    ('http://localhost:8080/api/lesson/'
      + lessonId + '/widget')
      .then(response => response.json());
  }


}
