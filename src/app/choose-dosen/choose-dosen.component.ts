import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

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

  constructor() {

    
   }

  ngOnInit() {

    //----type of final task--//
    this.typeofFinaltask = [];
    this.typeofFinaltask.push({ label: 'Choose Type Of Final Task', value: null });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 1', value: { id: 1, name: 'Tugas Akhir 1', code: 'T1' } });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 2', value: { id: 2, name: 'Tugas Akhir 2', code: 'T1' } });
    //----type of final task--//

    //----Lecturer One--//
    this.lecturerOne = [];
    this.lecturerOne.push({ label: 'Choose Lecture 1', value: null });
    this.lecturerOne.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'LecOne1', code: 'LecOne1' } });
    this.lecturerOne.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'LecOne2', code: 'LecOne2' } });
    this.lecturerOne.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'LecOne3', code: 'LecOne3' } });
    //----Lecturer One--//

    //----Lecturer Two--//
    this.lecturerTwo = [];
    this.lecturerTwo.push({ label: 'Choose Lecture 2', value: null });
    this.lecturerTwo.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'Yulhendri S.Kom., M.Kom', code: 'LecTwo1' } });
    this.lecturerTwo.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'Bambang S.Kom., M.Kom', code: 'LecTwo2' } });
    this.lecturerTwo.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'Holder Simorangkir S.Kom., M.Kom', code: 'LecTwo3' } });
    //----Lecturer Two--//

    //----Lecturer Optional--//
    this.lecturerOptional = [];
    this.lecturerOptional.push({ label: 'Choose Optional Lecturer', value: null });
    this.lecturerOptional.push({ label: 'Yulhendri S.Kom., M.Kom', value: { id: 1, name: 'Yulhendri S.Kom., M.Kom', code: 'LecOpt1' } });
    this.lecturerOptional.push({ label: 'Bambang S.Kom., M.Kom', value: { id: 2, name: 'Bambang S.Kom., M.Kom', code: 'LecOpt2' } });
    this.lecturerOptional.push({ label: 'Holder Simorangkir S.Kom., M.Kom', value: { id: 3, name: 'Holder Simorangkir S.Kom., M.Kom', code: 'LecOpt3' } });
    //----Lecturer Optional--//

    //----Lecturer Majors--//
    this.selectMajors = [];
    this.selectMajors.push({ label: 'Choose Majors', value: null });
    this.selectMajors.push({ label: 'Sistem Informasi', value: { id: 1, name: 'Sistem Informasi', code: 'SI' } });
    this.selectMajors.push({ label: 'Teknik Informatika', value: { id: 2, name: 'Teknik Informatika', code: 'TI' } });
    //----Lecturer Majors--//
    
    //----Academic Year--//
    this.academicYear = [];
    this.academicYear.push({ label: 'Choose Academic Year', value: null });
    this.academicYear.push({ label: '2009', value: { id: 1, name: '2009', code: '9' } });
    this.academicYear.push({ label: '2010', value: { id: 1, name: '2010', code: '10' } });
    this.academicYear.push({ label: '2011', value: { id: 1, name: '2011', code: '11' } });
    this.academicYear.push({ label: '2012', value: { id: 1, name: '2012', code: '12' } });
    this.academicYear.push({ label: '2013', value: { id: 1, name: '2013', code: '13' } });
    this.academicYear.push({ label: '2014', value: { id: 1, name: '2014', code: '14' } });
    this.academicYear.push({ label: '2015', value: { id: 1, name: '2015', code: '15' } });
    this.academicYear.push({ label: '2016', value: { id: 1, name: '2016', code: '16' } });
    this.academicYear.push({ label: '2017', value: { id: 1, name: '2017', code: '17' } });
    //----Academic Year--//

    //----Lecturer Majors--//
    this.taskLevel = [];
    this.taskLevel.push({ label: 'Choose Level', value: null });
    this.taskLevel.push({ label: 'Mulai', value: { id: 1, name: 'Mulai', code: 'M1' } });
    this.taskLevel.push({ label: 'Melanjutkan', value: { id: 2, name: 'Melanjutkan', code: 'M2' } });
    this.taskLevel.push({ label: 'Mengulang', value: { id: 2, name: 'Mengulang', code: 'M3' } });
    //----Lecturer Majors--//

  }

}
