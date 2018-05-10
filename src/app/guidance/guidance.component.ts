import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  public msgs: Message[];

  public uploadedFiles: any[] = [];

  public pdfSrc: string = '../../assets/Fix.pdf';

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
