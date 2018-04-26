import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { UserService } from './../../service/service/UserService';

@Component({
  selector: 'app-choose-dosen',
  templateUrl: './choose-dosen.component.html',
  styleUrls: ['./choose-dosen.component.css']
})
export class ChooseDosenComponent implements OnInit {

  public typeofFinaltask: SelectItem[];
  public lecturerOne: SelectItem[];
  public lecturerTwo: SelectItem[];
  public lecturerOptional: SelectItem[];
  public selectMajors: SelectItem[];
  public academicYear: SelectItem[];
  public taskLevel: SelectItem[];
  public fullname: string;
  public nim: string;
  public selectedMajors: string;
  public selectedFinalTask: any;
  public selectedlecturerOne: any;
  public selectedlecturerTwo: any;
  public selectedlecturerOptional: any;
  public titleTA: string;
  public dataStorage: any;
  public username: string;
  public major: string;

  constructor(
    public UserService: UserService
  ) {
    const datas = JSON.parse(localStorage.getItem('VMDDEVELOPER'));
    this.dataStorage = datas;
  }

  ngOnInit() {
    //--getfullname--//
    this.username = this.dataStorage.fullname;
    console.log(this.username, 'Fullname');
    this.major = this.dataStorage.jurusan_name;
    console.log(this.major, 'Fullname');

    //----type of final task--//
    this.typeofFinaltask = [];
    this.typeofFinaltask.push({ label: 'Choose Type Of Final Task', value: null });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 1', value: { id: 1, name: 'Tugas Akhir 1', code: 'T1' } });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 2', value: { id: 2, name: 'Tugas Akhir 2', code: 'T1' } });
    //----type of final task--//

    //----Lecturer One--//
    // this.lecturerOne = [];
    // this.lecturerOne.push({ label: 'Choose Lecture 1', value: null });
    // this.lecturerOne.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'Yulhendri S.Kom., M.Kom', code: 'LecOne1' } });
    // this.lecturerOne.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'Bambang S.Kom., M.Kom', code: 'LecOne2' } });
    // this.lecturerOne.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'Holder Simorangkir S.Kom., M.Kom', code: 'LecOne3' } });
    //----Lecturer One--//

    //----Lecturer Two--//
    // this.lecturerTwo = [];
    // this.lecturerTwo.push({ label: 'Choose Lecture 2', value: null });
    // this.lecturerTwo.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'Yulhendri S.Kom., M.Kom', code: 'LecTwo1' } });
    // this.lecturerTwo.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'Bambang S.Kom., M.Kom', code: 'LecTwo2' } });
    // this.lecturerTwo.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'Holder Simorangkir S.Kom., M.Kom', code: 'LecTwo3' } });
    //----Lecturer Two--//

    //----Lecturer Optional--//
    // this.lecturerOptional = [];
    // this.lecturerOptional.push({ label: 'Choose Optional Lecturer', value: null });
    // this.lecturerOptional.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'Yulhendri S.Kom., M.Kom', code: 'LecOpt1' } });
    // this.lecturerOptional.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'Bambang S.Kom., M.Kom', code: 'LecOpt2' } });
    // this.lecturerOptional.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'Holder Simorangkir S.Kom., M.Kom', code: 'LecOpt3' } });
    //----Lecturer Optional--//

    //----Lecturer Majors--//
    this.selectMajors = [];
    this.selectMajors.push({ label: 'Choose Majors', value: null });
    this.selectMajors.push({ label: 'Sistem Informasi', value: { id: 1, name: 'Sistem Informasi', code: 'SI' } });
    this.selectMajors.push({ label: 'Teknik Informatika', value: { id: 2, name: 'Teknik Informatika', code: 'TI' } });
    //----Lecturer Majors--//

    //----Lecturer Majors--//
    this.taskLevel = [];
    this.taskLevel.push({ label: 'Choose Level', value: null });
    this.taskLevel.push({ label: 'Mulai', value: { id: 1, name: 'Mulai', code: 'M1' } });
    this.taskLevel.push({ label: 'Melanjutkan', value: { id: 2, name: 'Melanjutkan', code: 'M2' } });
    this.taskLevel.push({ label: 'Mengulang', value: { id: 2, name: 'Mengulang', code: 'M3' } });
    //----Lecturer Majors--//


    this.UserService.getDosen().subscribe(result => {
      console.log(result, 'Result Dosen');
    }, (error) => {
      console.log(error, 'Error Dosen');
    });
  }

  send() {
    this.UserService.isRequestTA(this.nim, this.selectedFinalTask.name, this.selectedlecturerOne.name, this.selectedlecturerTwo.name,
      this.selectedlecturerOptional.name, this.titleTA).subscribe((res: any) => {
        console.log(res, 'res')
      }, (error) => {
        console.log(error, 'error');
      })
    // console.log(this.nim, '1')
    // console.log(this.selectedFinalTask.name, 'Asd')
    // console.log(this.selectedlecturerOne.name, '3')
    // console.log(this.selectedlecturerTwo.name, '4')
    // console.log(this.selectedlecturerOptional.name, '5')
    // console.log(this.titleTA, '6' )
  }

}
