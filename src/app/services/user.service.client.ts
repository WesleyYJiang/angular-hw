const remoteURL = 'http://webdev-node-hw.herokuapp.com/api';
const localURL = 'http://localhost:4000/api/';


export class UserServiceClient {

  findUserById(userId) {
    return fetch(remoteURL + 'user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch(remoteURL + 'username/' + username)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(remoteURL + 'login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(remoteURL + 'logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(remoteURL + 'profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(remoteURL + 'user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  update(user) {
    return fetch(remoteURL + 'user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
