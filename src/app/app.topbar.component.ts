import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import { AuthenticationService } from './../service/service/AuthenticationService';
@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="logo">
                <a href="#">
                    <img src="assets/layout/images/logo.png">
                </a>
            </div>

            <img src="assets/layout/images/logo-text.svg" class="app-name"/>

            <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                <i class="material-icons">menu</i>
            </a>

            <ul class="topbar-menu fadeInDown" [ngClass]="{'topbar-menu-visible': app.topbarMenuActive}">
                <li #profile class="profile-item" [ngClass]="{'active-topmenuitem':app.activeTopbarItem === profile}">
                    <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                        <div class="profile-image">
                            <img src="assets/layout/images/profile-image.png">
                        </div>
                        <div class="profile-info">
                            <span class="topbar-item-name profile-name">{{username}}</span>
                            <span class="topbar-item-name profile-role">System Admin</span>
                        </div>
                    </a>

                    <ul class="fadeInDown">
                        <li role="menuitem">
                            <a href="#">
                                <i class="material-icons">person</i>
                                <span>Profile</span>
                                <span class="topbar-submenuitem-badge">5</span>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a (click)="logout()">
                                <i class="material-icons">power_settings_new</i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppTopbarComponent {

    public username: string;
    constructor(
        public app: AppComponent,
        public AuthenticationServices: AuthenticationService
    ) { }

    logout() {
        this.AuthenticationServices.isLogout();
    }

}
