import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit { 
  
  msgs: Message[];

  uploadedFiles: any[] = [];

  onUpload(event) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }


  constructor() { }

  ngOnInit() {
  }

}
