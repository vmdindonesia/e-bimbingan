import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <div class="layout-wrapper" [ngClass]="{'layout-wrapper-menu-active':sidebarActive,
                                          'layout-overlay-menu':overlay}">

        <app-topbar></app-topbar>

        <app-sidebar></app-sidebar>

        <div class="layout-main">
            <div class="layout-main-content">
                <router-outlet></router-outlet>

                <app-footer></app-footer>

            </div>
        </div>

    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
