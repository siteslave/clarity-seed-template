import { Component, OnInit, Inject } from '@angular/core';

import { UserService } from '../user.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {}

}
