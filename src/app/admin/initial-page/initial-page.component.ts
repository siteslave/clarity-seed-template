import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../attendances.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(private attendancesService: AttendancesService) { }

  ngOnInit() { }

}
