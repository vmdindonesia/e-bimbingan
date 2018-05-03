import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from './../home/home.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public dataStorage: any;
  public model: any[];

  constructor(public app: HomeComponent) {
    const datas = localStorage.getItem('VMDDEVELOPER');
    this.dataStorage = JSON.parse(datas);
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Themes', icon: 'palette',
        items: [
          { label: 'Blue - Amber', icon: 'brush', command: (event) => { this.changeTheme('blue'); } },
          { label: 'Teal - Amber', icon: 'brush', command: (event) => { this.changeTheme('teal'); } },
          { label: 'Blue Grey - Green', icon: 'brush', command: (event) => { this.changeTheme('blue-grey'); } },
          { label: 'Cyan - Yellow', icon: 'brush', command: (event) => { this.changeTheme('cyan'); } },
          { label: 'Dark - Blue', icon: 'brush', command: (event) => { this.changeTheme('dark-blue'); } },
          { label: 'Dark - Green', icon: 'brush', command: (event) => { this.changeTheme('dark-green'); } },
          { label: 'Light Blue - Green', icon: 'brush', command: (event) => { this.changeTheme('light-blue'); } },
          { label: 'Indio - Cyan', icon: 'brush', command: (event) => { this.changeTheme('indigo'); } },
          { label: 'Deep Purple - Pink', icon: 'brush', command: (event) => { this.changeTheme('deep-purple'); } },
          { label: 'Green - Yellow', icon: 'brush', command: (event) => { this.changeTheme('green'); } }
        ]
      }
    ];
  }

  changeTheme(theme) {
    const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');

    themeLink.href = 'assets/theme/theme-' + theme + '.css';
    layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
  }

}


@Component({
  /* tslint:disable:component-selector */
  selector: '[app-setting]',
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
              <ul app-setting [item]="child" *ngIf="child.items" [@children]="isActive(i) ?
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
export class AppSettingComponent {

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

