import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { AuthenticationService } from './../../service/service/AuthenticationService';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public dataStorage: any;
  public username: string;
  public role: string;

  constructor(
    public AuthenticationServices: AuthenticationService,
    public app: AppComponent
  ) {
    const datas = JSON.parse(localStorage.getItem('VMDDEVELOPER'));
    this.dataStorage = datas;
  }

  ngOnInit() {
    console.log('Top Bar Menu');
    console.log(this.dataStorage, 'Data Storage');
    this.username = this.dataStorage.fullname;
    const roles = this.dataStorage.permission;
    switch (roles) {
      case 'mahasiswa':
        this.role = 'Mahasiswa';
        break;
      case 'dosen':
        this.role = 'Dosen';
        break;
      case 'admin':
        this.role = 'System Admin';
        break;
      default:
        this.role = 'KAPRODI';
    }
  }

  logout() {
    this.AuthenticationServices.isLogout();
  }
}
