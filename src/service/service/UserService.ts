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
        return this.http.post(CONFIGGLOBAL.API_URL + '/createBimbingan', {
            nim: nim, tipe_ta: selectedFinalTask, dospem_1: selectedlecturerOne,
            dospem_2: selectedlecturerTwo, dospem_3: selectedlecturerOptional, judul_ta: titleTA,
        }).map(res => {
            console.log(res, 'data');
        });
    }


    getDosen() {
        return this.http.get(CONFIGGLOBAL.API_URL + '/getListDosen').map(res => {
            const dataDosen = res.json();
            console.log(dataDosen, 'Data Dosen');
        });
    }


}

