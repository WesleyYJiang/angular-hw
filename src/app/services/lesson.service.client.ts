export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('https://webdev-hw-wj.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
