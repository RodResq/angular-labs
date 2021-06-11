import {Component, OnDestroy, OnInit} from '@angular/core';
import {UploadFileService} from './upload-file.service';
import {Subscription} from 'rxjs';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit, OnDestroy {

  filesSet: Set<File> = new Set<File>();
  fileToUpload: File = null;
  filesUndescribe: Subscription = new Subscription();
  progress: number = 0;

  constructor(private service: UploadFileService) {
  }

  ngOnInit(): void {
    console.log(this.progress);
  }

  onChange(files: FileList) {
    this.fileToUpload = files.item(0);

    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files.item(i).name);
      this.filesSet.add(files.item(i));
    }

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
    this.progress = 0;
  }

  onUpload() {
    if(this.filesSet && this.filesSet.size > 0) {
      this.filesUndescribe = this.service.upload(this.filesSet, 'http://localhost:8000/upload')
        .subscribe((event: HttpEvent<object>) => {
          console.log(event);

          if(event.type === HttpEventType.Response) {
            console.log('Upload Concluido')
          }else if(event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100)/event.total);
            this.progress = percentDone;
            console.log(percentDone);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.filesUndescribe.unsubscribe();
  }
}
