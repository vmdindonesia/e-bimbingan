import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CONFIGGLOBAL } from './../shared/config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private http: Http) { }

    isLogin(username: string, password: string) {
        return this.http.post(CONFIGGLOBAL.API_URL + '/login', { username: username, password: password })
            .map(res => {
                const dataLogin = res.json();
                if (res.json()) {
                    localStorage.setItem('VMDDEVELOPER', dataLogin);
                    console.log(dataLogin, 'Data Login');
                    this.getLoggedInName.emit(dataLogin.fullname);
                    return true;
                } else {
                    this.getLoggedInName.emit('Sign In');
                    return false;
                }
            }, (error => {
                console.log(error);
            }));
    }

    isLogout() {
        localStorage.removeItem('VMDDEVELOPER');
    }
}
