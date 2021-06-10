import {Component, OnDestroy, OnInit} from '@angular/core';
import {UploadFileService} from './upload-file.service';
import {resolveProvidersRequiringFactory} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  filesSet: Set<File> = new Set<File>();
  fileToUpload: File = null;
  filesUndescribe: Subscription = new Subscription();

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);

    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files.item(i).name);
      this.filesSet.add(files.item(i));
    }

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
  }

  onUpload() {
    if(this.filesSet && this.filesSet.size > 0) {
      this.filesUndescribe = this.service.upload(this.filesSet, 'http://localhost:8000/upload')
        .subscribe(response => console.log('Upload Concluido'));
    }
  }

  ngOnDestroy(): void {
    this.filesUndescribe.unsubscribe();
  }
}
