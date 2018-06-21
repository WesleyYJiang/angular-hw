export class SectionServiceClient {
  LOCAL_URL = 'https://localhost:4000/api/course/COURSEID/section';
  REMOTE_URL = 'https://webdev-node-hw.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    return fetch('https://webdev-node-hw.herokuapp.com/api/student/section', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://webdev-node-hw.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollStudentInSection(sectionId) {
    const url = 'https://webdev-node-hw.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  deleteSection(sectionId) {
    const url = 'https://webdev-node-hw.herokuapp.com/api/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  updateSection(sectionId, name, seats) {
    const section = {sectionId, name, seats};
    const url = 'https://webdev-node-hw.herokuapp.com/api/section/update/' + sectionId;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
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
