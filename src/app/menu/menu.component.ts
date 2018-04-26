import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public model: any[];

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.model = [
      { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
      {
        label: 'Components', icon: 'list',
        items: [
          { label: 'Tambah Mahasiswa', icon: 'input', routerLink: ['/add-mahasiswa'] },
          { label: 'Tambah Dosen', icon: 'input', routerLink: ['/add-dosen'] },
          { label: 'Daftar Mahasiswa', icon: 'input', routerLink: ['/daftar-mahasiswa'] },
          { label: 'Pengajuan Bimbingan', icon: 'input', routerLink: ['/choose-dosen'] },
          { label: 'Pengajuan Mahasiswa', icon: 'input', routerLink: ['/list-mhs-daftar'] },
          { label: 'Validasi Pengajuan', icon: 'input', routerLink: ['/form-validate'] }
        ]
      }
    ];
  }
}

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-submenu]',
  /* tslint:enable:component-selector */
  template: `
      <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
          <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
              <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" class="ripplelink"
                 *ngIf="!child.routerLink" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                  (mouseenter)="hover=true" (mouseleave)="hover=false">
                  <i class="material-icons">{{child.icon}}</i>
                  <span>{{child.label}}</span>
                  <span class="ink" *ngIf="hover"></span>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                  <i class="material-icons" *ngIf="child.items">keyboard_arrow_down</i>
              </a>

              <a (click)="itemClick($event,child,i)" class="ripplelink" *ngIf="child.routerLink"
                  [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                 [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                  (mouseenter)="hover=true" (mouseleave)="hover=false">
                  <i class="material-icons">{{child.icon}}</i>
                  <span>{{child.label}}</span>
                  <span class="ink" *ngIf="hover"></span>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                  <i class="material-icons" *ngIf="child.items">keyboard_arrow_down</i>
              </a>
              <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ?
              'visible' : 'hidden'" [visible]="isActive(i)"></ul>
          </li>
      </ng-template>
  `,
  animations: [
    trigger('children', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppSubMenuComponent {

  @Input() item: MenuItem;

  @Input() root: boolean;

  @Input() visible: boolean;

  activeIndex: number;

  hover: boolean;

  constructor(public app: AppComponent, public router: Router, public location: Location) { }

  itemClick(event: Event, item: MenuItem, index: number) {
    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return true;
    }

    // activate current item and deactivate active sibling if any
    this.activeIndex = (this.activeIndex === index) ? null : index;

    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    // prevent hash change
    if (item.items || (!item.url && !item.routerLink)) {
      event.preventDefault();
    }

    // hide menu
    if (!item.items && this.app.overlay) {
      this.app.sidebarActive = false;
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  unsubscribe(item: any) {
    if (item.eventEmitter) {
      item.eventEmitter.unsubscribe();
    }

    if (item.items) {
      for (const childItem of item.items) {
        this.unsubscribe(childItem);
      }
    }
  }
}

