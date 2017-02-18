import { Component, OnInit, ViewChild, Inject, NgZone, EventEmitter } from '@angular/core';
import { Wizard, WizardStep } from 'clarity-angular';
import { NgUploaderOptions, UploadedFile } from 'ngx-uploader';
import { AttendancesService } from '../attendances.service';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.css']
})
export class ImportPageComponent implements OnInit {
  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;
  sizeLimit: number = 10000000; // 10MB
  inputUploadEvents: EventEmitter<string>;


  @ViewChild('wizard') wizard: Wizard;

  isSuccess = false;
  isError = false;
  token: string;
  startDate: any;
  endDate: any;
  uploading = false;
  totalImported = 0;

  constructor(
    @Inject(NgZone) private zone: NgZone,
    @Inject('API_URL') private url: string,
    private attendancesService: AttendancesService
  ) {
    this.inputUploadEvents = new EventEmitter<string>();
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() { }

  changeDate() {
    this.options = new NgUploaderOptions({
      url: `${this.url}/admin/upload?token=${this.token}`,
      allowedExtensions: ['csv'],
      data: {
        start: this.startDate,
        end: this.endDate
      },
      filterExtensions: true,
      fieldName: 'file',
      fieldReset: true,
      maxUploads: 1,
      method: 'POST',
      autoUpload: true,
      calculateSpeed: true
    });
  }

  showUploader() {
    this.wizard.open();
  }

  startUpload() {
    this.inputUploadEvents.emit('startUpload');
  }

  beforeUpload(uploadingFile: UploadedFile): void {
    console.log(uploadingFile);
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.isError = true;
    }
  }

  handleUpload(data: any) {
    this.uploading = true;
    const that = this;

    setTimeout(() => {
      that.zone.run(() => {
        that.response = data;
        if (data && data.response) {
          const result = JSON.parse(data.response);
          console.log(result);
        }
      });
    });
  }

  fileOverBase(e: boolean) {
    this.hasBaseDropZoneOver = e;
  }

}
