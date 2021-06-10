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

    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files.item(i).name);
    }

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
  }
}
