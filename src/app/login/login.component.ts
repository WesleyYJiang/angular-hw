import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    this.service
      .login(username, password)
      .then((response) => response.json()
            .then((r) => {
              if (r == null) {
                alert('Wrong credentials! Try Again!');
              } else {
                this.router.navigate(['profile']);
              }
            })
        // , () => alert('Wrong credentials! Try Again!')
      );
  }

  constructor(private router: Router, private service: UserServiceClient) { }

  ngOnInit() {}
}
