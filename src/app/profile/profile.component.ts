import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  username;
  firstName;
  lastName;
  email;
  sections = [];
  user = {};

  setUser() {
    this.user = {
      username: this.username,
      info: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
    };
  }

  unEnroll(section) {
    this.sectionService
      .unEnrollStudentInSection(section._id)
      .then(() => { alert('You have unenrolled!'); })
      .then(() => this.sectionService
        .findSectionsForStudent()
        .then(sections => this.sections = sections ));
  }

  update() {
    this.setUser();
    this.service.update(this.user).then(() => alert('Update complete!'));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  fill(user) {
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  ngOnInit() {
    this.service.profile()
      .then(user => this.fill(user),
        () => this.router.navigate(['login']));

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
