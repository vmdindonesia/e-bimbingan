import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CONFIGGLOBAL } from './../shared/config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private Routers: Router,
    ) { }

    isRequestTA(nim: string, selectedFinalTask: string,
        selectedlecturerOne: string, selectedlecturerTwo: string, selectedlecturerOptional: string, titleTA: string) {
        console.log(nim,
            selectedFinalTask,
            selectedlecturerOne,
            selectedlecturerTwo,
            selectedlecturerOptional,
            titleTA, 'Data Lemparan Form');

        return this.http.post(CONFIGGLOBAL.API_URL + '/createBimbingan', {
            nim: nim,
            tipe_ta: selectedFinalTask,
            dospem_1: selectedlecturerOne,
            dospem_2: selectedlecturerTwo,
            dospem_3: selectedlecturerOptional,
            judul_ta: titleTA
        })
            .map(data => data);
    }

    isAddDosen(nipDosen: string, selectedMajor: string,
        fullnameDosen: string, contactDosen: string, addressDosen: string, selectedGender: string,
        userName: string, pwdDosen: string, selectedStatus: string) {
        console.log(nipDosen,
            selectedMajor,
            fullnameDosen,
            contactDosen,
            addressDosen,
            selectedGender,
            userName,
            pwdDosen,
            selectedStatus, 'Data Lemparan Form Dosen');

        return this.http.post(CONFIGGLOBAL.API_URL + '/createDosen', {
            nip: nipDosen,
            username: userName,
            password: pwdDosen,
            fullname: fullnameDosen,
            no_telpon: contactDosen,
            jenis_kelamin: selectedGender,
            alamat: addressDosen,
            status: selectedStatus,
            jurusan: selectedMajor

        })
            .map(data => data);
    }

    isAddMhs(nimMhs: string, selectedMajor: string,
        nameMhs: string, phoneMhs: string, addressMhs: string,
        selectedGender: string, usernameMhs: string, passwordMhs: string) {
        console.log(
            nimMhs,
            nameMhs,
            selectedMajor,
            addressMhs,
            phoneMhs,
            selectedGender,
            usernameMhs,
            passwordMhs, 'Data Lemparan Form Mahasiswa');

        return this.http.post(CONFIGGLOBAL.API_URL + '/createMahasiswa', {
            nim: nimMhs,
            username: usernameMhs,
            password: passwordMhs,
            fullname: nameMhs,
            no_telpon: phoneMhs,
            jenis_kelamin: selectedGender,
            jurusan: selectedMajor,
            alamat: addressMhs

        })
            .pipe(data => data);
    }






}
