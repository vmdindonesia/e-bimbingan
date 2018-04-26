import { Component, OnInit } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-add-dosen',
  templateUrl: './add-dosen.component.html',
  styleUrls: ['./add-dosen.component.css']
})
export class AddDosenComponent implements OnInit {

  cities: SelectItem[];

  selectedCity1: any;

  constructor() { }

  ngOnInit() {

    this.cities = [];
    this.cities.push({label: 'Jurusan', value: 0});
    this.cities.push({label: 'Sistem Informatika', value: {id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Teknik Informatika', value: {id: 2, name: 'Rome', code: 'RM'}});
 
  }

}
