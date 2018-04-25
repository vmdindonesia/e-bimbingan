import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public dataStorage: any;

  constructor(public app: HomeComponent) {
    const datas = JSON.parse(localStorage.getItem('VMDDEVELOPER'));
    this.dataStorage = datas;
  }

  ngOnInit() {
  }

}
