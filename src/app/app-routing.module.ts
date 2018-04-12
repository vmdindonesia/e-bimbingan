import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { EmptyComponent } from './empty/empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilsComponent } from './utils/utils.component';
import { MessagesComponent } from './messages/messages.component';
import { FileComponent } from './file/file.component';
import { MiscComponent } from './misc/misc.component'

const routes: Routes = [
  { path: '', redirectTo: '/misc', pathMatch: 'full' }, //Ini defaullt page
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'utils', component: UtilsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'file', component: FileComponent },
  { path: 'misc', component: MiscComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
