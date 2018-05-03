import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { UserService } from './../../service/service/UserService';

@Component({
  selector: 'app-add-dosen',
  templateUrl: './add-dosen.component.html',
  styleUrls: ['./add-dosen.component.css']
})
export class AddDosenComponent implements OnInit {

  public major: SelectItem[];
  public status: SelectItem[];
  public nipDosen: any;
  public selectedMajor: any;
  public selectedStatus: any;
  public fullnameDosen: any;
  public contactDosen: any;
  public addressDosen: any;
  public selectedGender: any;
  public userName: any;
  public pwdDosen: any

  constructor(
    public UserServices: UserService
  ) {
  }


  ngOnInit() {
    //----selectMajor----//
    this.major = [];
    this.major.push({ label: 'Jurusan', value: null });
    this.major.push({ label: 'Sistem Informatika', value: { id: 1, name: 'Sistem Informasi', code: 'SI' } });
    this.major.push({ label: 'Teknik Informatika', value: { id: 2, name: 'Teknik Informatika', code: 'TI' } });
    //----selectMajor----//

     //----selectStatus----//
     this.status = [];
     this.status.push({ label: 'Status', value: null });
     this.status.push({ label: 'Dosen', value: { id: 1, name: 'dosen', code: 'Neutral' } });
     this.status.push({ label: 'Kaprodi Si', value: { id: 2, name: 'kaprodi_si', code: 'SI' } });
     this.status.push({ label: 'Kaprodi Ti', value: { id: 3, name: 'kaprodi_ti', code: 'TI' } });
     //----selectMajor----//

  }


  //---add Dosen---//
  save() {
    console.log(
      this.nipDosen, this.selectedMajor.name, this.contactDosen, this.addressDosen,
      this.fullnameDosen, this.selectedGender, this.userName, this.pwdDosen, this.selectedStatus.name
    );
    this.UserServices.isAddDosen(this.nipDosen, this.selectedMajor.name, this.contactDosen, this.addressDosen,
      this.fullnameDosen, this.selectedGender, this.userName, this.pwdDosen, this.selectedStatus.name ).subscribe(res => {
        console.log(res, 'res');
      }, (error) => {
        console.log(error, 'error');
      });

  }



}
