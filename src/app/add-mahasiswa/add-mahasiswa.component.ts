import { Component, OnInit } from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.css']
})
export class AddMahasiswaComponent implements OnInit {

  cities: SelectItem[];

  selectedCity1: any;
  // nim
  // username
  // password
  // fullname
  // no_telepon
  // jenis_kelamin
  // alamat
  // jurusan

  constructor() { }

  ngOnInit() {

    this.cities = [];
    this.cities.push({label: 'Jurusan', value: 0});
    this.cities.push({label: 'Sistem Informatika', value: {id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Teknik Informatika', value: {id: 2, name: 'Rome', code: 'RM'}});
  }

}
