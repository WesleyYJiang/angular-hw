export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch
    ('https://webdev-hw-wj.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch
    ('https://webdev-hw-wj.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }
  findLessonsForModule(moduleId) {
    return fetch
    ('https://webdev-hw-wj.herokuapp.com/api/module/'
      + moduleId + '/lesson')
      .then(response => response.json());
  }
  findWidgetsForLesson(lessonId) {
    return fetch
    ('https://webdev-hw-wj.herokuapp.com/api/lesson/'
      + lessonId + '/widget')
      .then(response => response.json());
  }


}
