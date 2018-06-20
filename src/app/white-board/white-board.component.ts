import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient) {
  }

  login;
  loggedIn = false;
  notLoggedIn = false;
  sections = [];

  ngOnInit() {
    this.service.profile()
      .then(() => {
        this.loggedIn = false;
        this.notLoggedIn = true;
        },
        () => {
        this.loggedIn = true;
        this.notLoggedIn = false;
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
