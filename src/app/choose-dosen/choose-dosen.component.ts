import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ListDosenService } from './../../service/service/getDosen';
import { ListDosen } from './../../service/domain/getDosen';
import { UserService } from './../../service/service/UserService';

@Component({
  selector: 'app-choose-dosen',
  templateUrl: './choose-dosen.component.html',
  styleUrls: ['./choose-dosen.component.css']
})
export class ChooseDosenComponent implements OnInit {

  public listDosen: ListDosen[];
  public arrData: any = [];
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
    public ListDosenServices: ListDosenService,
    public UserServices: UserService
  ) {
    const datas = JSON.parse(localStorage.getItem('VMDDEVELOPER'));
    this.dataStorage = datas;
  }

  ngOnInit() {
    // --getfullname and major--
    this.username = this.dataStorage.fullname;
    this.major = this.dataStorage.jurusan_name;

    // Get list Dosen
    this.arrData.push({ label: 'Choose Type Of Lecture', value: null });
    this.ListDosenServices.getDosen().then(listDosen => {
      for (let i = 0; i < listDosen.length; i++) {
        this.arrData.push({ label: listDosen[i].fullname, value: { id: listDosen[i].nip, name: listDosen[i].fullname  } });
      }
    });

    // ----type of final task--
    this.typeofFinaltask = [];
    this.typeofFinaltask.push({ label: 'Choose Type Of Final Task', value: null });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 1', value: { id: 1, name: 'Tugas Akhir 1', code: 'T1' } });
    this.typeofFinaltask.push({ label: 'Tugas Akhir 2', value: { id: 2, name: 'Tugas Akhir 2', code: 'T1' } });
    // ----type of final task--

    // ----Lecturer Majors--
    this.selectMajors = [];
    this.selectMajors.push({ label: 'Choose Majors', value: null });
    this.selectMajors.push({ label: 'Sistem Informasi', value: { id: 1, name: 'Sistem Informasi', code: 'SI' } });
    this.selectMajors.push({ label: 'Teknik Informatika', value: { id: 2, name: 'Teknik Informatika', code: 'TI' } });
    // ----Lecturer Majors--

    // ----Lecturer Majors--
    this.taskLevel = [];
    this.taskLevel.push({ label: 'Choose Level', value: null });
    this.taskLevel.push({ label: 'Mulai', value: { id: 1, name: 'Mulai', code: 'M1' } });
    this.taskLevel.push({ label: 'Melanjutkan', value: { id: 2, name: 'Melanjutkan', code: 'M2' } });
    this.taskLevel.push({ label: 'Mengulang', value: { id: 2, name: 'Mengulang', code: 'M3' } });
    // ----Lecturer Majors--
  }

  send() {
    console.log(
      this.nim, this.selectedFinalTask.name, this.selectedlecturerOne.name, this.selectedlecturerTwo.name,
      this.selectedlecturerOptional.name, this.titleTA
    );
    this.UserServices.isRequestTA(this.nim, this.selectedFinalTask.name, this.selectedlecturerOne.name, this.selectedlecturerTwo.name,
      this.selectedlecturerOptional.name, this.titleTA).subscribe(res => {
        console.log(res, 'res');
      }, (error) => {
        console.log(error, 'error');
      });
  }

}
