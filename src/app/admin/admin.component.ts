import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  onlineOffline: boolean;
  status: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('fullname');
    this.router.navigate(['login']);
  }
}
