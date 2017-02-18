import { Component, OnInit, Inject } from '@angular/core';
import { AttendancesService } from '../attendances.service';
@Component({
  selector: 'app-attendances-page',
  templateUrl: './attendances-page.component.html',
  styleUrls: ['./attendances-page.component.css']
})
export class AttendancesPageComponent implements OnInit {

  token: string;
  constructor(
    private attendancesService: AttendancesService,
    @Inject('API_URL') private url: string
  ) { }

  ngOnInit() { }

}
