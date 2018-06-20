export class SectionServiceClient {
  LOCAL_URL = 'https://localhost:4000/api/course/COURSEID/section';
  REMOTE_URL = 'https://webdev-node-hw.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://webdev-node-hw.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'webdev-node-hw.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.REMOTE_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }
  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.REMOTE_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
