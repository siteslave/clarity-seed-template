import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  fullname: string;

  constructor(private router: Router) {
    this.fullname = sessionStorage.getItem('fullname');
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('fullname');
    this.router.navigate(['login']);
  }

}
