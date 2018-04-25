import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CONFIGGLOBAL } from './../shared/config';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './../model/User';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private Routers: Router,
    ) { }

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    isLogin(username: string, password: string): Observable<{}> {
        return this.http.post(CONFIGGLOBAL.API_URL + '/login', { username: username, password: password })
            .pipe(
                tap(response => console.log(response)),
                catchError(this.handleError('getHeroes', []))
            );
        // .subscribe(res => {
        //     console.log(res, 'Data Login');
        //     return res;
        // if (res.json()) {
        //     localStorage.setItem('VMDDEVELOPER', dataLogin);
        //     console.log(dataLogin.permission, 'Data Login');
        //     const permissions = dataLogin.permission;
        //     switch (permissions) {
        //         case 'mahasiswa':
        //             return this.Routers.navigate(['/dashboard']);
        //         case 'dosen':
        //             return this.Routers.navigate(['/dashboard']);
        //         case 'admin':
        //             return this.Routers.navigate(['/dashboard']);
        //         default:
        //             return this.Routers.navigate(['/dashboard']);
        //     }
        // } else {
        //     return false;
        // }
        // }, (error => {
        //     console.log(error);
        // }));
    }

    isLogout() {
        localStorage.removeItem('VMDDEVELOPER');
        return this.Routers.navigate(['/login']);
    }
}
