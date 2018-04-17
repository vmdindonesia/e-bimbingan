import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input').on('blur', function (e) {
      const el = $(this);
      if (el.val() !== '') {
        el.addClass('ui-state-filled');
      } else {
        el.removeClass('ui-state-filled');
      }
    });
  }

}
