import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CONFIGGLOBAL } from './../shared/config';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
        private Routers: Router,
    ) { }

    isLogin(username: string, password: string) {
        return this.http.post(CONFIGGLOBAL.API_URL + '/login', { username: username, password: password })
            .map(res => {
                const dataLogin = res.json();
                if (res.json()) {
                    localStorage.setItem('VMDDEVELOPER', dataLogin);
                    console.log(dataLogin.permission, 'Data Login');
                    const permissions = dataLogin.permission;
                    switch (permissions) {
                        case 'mahasiswa':
                            return this.Routers.navigate(['/dashboard']);
                        case 'dosen':
                            return this.Routers.navigate(['/dashboard']);
                        case 'admin':
                            return this.Routers.navigate(['/dashboard']);
                        default:
                            return this.Routers.navigate(['/dashboard']);
                    }
                } else {
                    return false;
                }
            }, (error => {
                console.log(error);
            }));
    }

    isLogout() {
        localStorage.removeItem('VMDDEVELOPER');
        return  this.Routers.navigate(['/login']);
    }
}
