import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  validUsername;

  // checkUsername(username) {
  //   this.service.findUserByUsername(username)
  //     .then(() => this.validUsername = false,
  //       () => this.validUsername = true);
  // }

  register(username, password, password2) {
    if (password !== password2) {
      alert('Passwords do not match!');
    } else {
      this.service.findUserByUsername(username)
        .then(() => alert('existing username!'),
          () =>
            this.service.createUser(username, password)
              .then(() =>
                this.router.navigate(['profile'])));
    }
  }

  ngOnInit() { }
}
