import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/service/AuthenticationService';
import { AuthService } from './../../service/service/AuthService';
import { Router, ActivatedRoute } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = true;
  public loader = true;
  public textError = true;
  public username: string;
  public password: string;
  public returnUrl: string;

  constructor(
    public AuthenticationServices: AuthenticationService,
    public AuthServices: AuthService,
    private Routers: Router,
    public Route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.AuthenticationServices.isLogout();
    this.returnUrl = this.Route.snapshot.queryParams['returnUrl'] || '/';

    $('input').on('blur', function (e) {
      const el = $(this);
      if (el.val() !== '') {
        el.addClass('ui-state-filled');
      } else {
        el.removeClass('ui-state-filled');
      }
    });
  }

  login() {
    this.textError = true;
    this.loading = false;
    this.loader = false;
    this.AuthenticationServices.isLogin(this.username, this.password).subscribe((res) => {
      console.log(res, 'RES KUY');
      this.AuthServices.isLogin().subscribe(() => {
        if (this.AuthServices.isLoggedIn) {
          this.loading = true;
          this.loader = true;
        }
      });
    }, (error) => {
      this.loading = true;
      this.loader = true;
      this.textError = false;
      console.log(error, 'ERROR LOGIN');
    });
  }
}
