export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://webdev-hw-wj.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
