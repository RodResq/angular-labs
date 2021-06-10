import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  fileToUpload: File = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);
    document.getElementById('customFileLabel').innerHTML = this.fileToUpload.name;
  }
}
