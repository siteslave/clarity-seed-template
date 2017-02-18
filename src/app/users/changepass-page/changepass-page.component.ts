import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-changepass-page',
  templateUrl: './changepass-page.component.html',
  styleUrls: ['./changepass-page.component.css']
})
export class ChangepassPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {}

}
