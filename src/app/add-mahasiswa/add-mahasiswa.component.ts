import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { UserService } from './../../service/service/UserService';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.css']
})
export class AddMahasiswaComponent implements OnInit {

  public passwordMhs: any;
  public usernameMhs: any;
  public selectedGender: any;
  public addressMhs: any;
  public phoneMhs: any;
  public nameMhs: any;
  public selectedMajor: any;
  public nimMhs: any;
  public majors: SelectItem[];
  // nim
  // username
  // password
  // fullname
  // no_telepon
  // jenis_kelamin
  // alamat
  // jurusan

  constructor(
    public UserServices: UserService
  ) { }

  ngOnInit() {

    //--select Major--//
    this.majors = [];
    this.majors.push({ label: 'Jurusan', value: 0 });
    this.majors.push({ label: 'Sistem Informatika', value: { id: 1, name: 'Sistem Informasi', code: 'SI' } });
    this.majors.push({ label: 'Teknik Informatika', value: { id: 2, name: 'Tenik Informatika', code: 'TI' } });
    //--select Major--//

  }

  save() {
    console.log(
      this.nimMhs, this.selectedMajor.name, this.nameMhs, this.phoneMhs,
      this.addressMhs, this.selectedGender, this.usernameMhs, this.passwordMhs
    );
    this.UserServices.isAddMhs(this.nimMhs, this.selectedMajor.name, this.nameMhs, this.phoneMhs,
      this.addressMhs, this.selectedGender, this.usernameMhs, this.passwordMhs).subscribe(res => {
        console.log(res, 'res');
      }, (error) => {
        console.log(error, 'error');
      });
  }


}
