import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ListDosen } from './../domain/getDosen';
import { CONFIGGLOBAL } from './../shared/config';

@Injectable()
export class ListDosenService {

    constructor(private http: Http) { }

    getDosen() {
        return this.http.get(CONFIGGLOBAL.API_URL + '/getListDosen')
            .toPromise()
            .then(res => <ListDosen[]>res.json())
            .then(data => data);
    }
}
