import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSideBarComponent {

    constructor(public app: HomeComponent) { }

}
