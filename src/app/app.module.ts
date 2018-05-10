import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import 'rxjs/add/operator/toPromise';

// Import Component
import { ButtonModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/primeng';
import { BreadcrumbModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { CarouselModule } from 'primeng/primeng';
import { ColorPickerModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { ChipsModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { SharedModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DataScrollerModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { LightboxModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/primeng';
import { MegaMenuModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { OrderListModule } from 'primeng/primeng';
import { OrganizationChartModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { PanelMenuModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { SlideMenuModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { SpinnerModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { TabMenuModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { TerminalModule } from 'primeng/primeng';
import { TieredMenuModule } from 'primeng/primeng';
import { ToggleButtonModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';

// Import Pages
import { AppSidebartabcontentComponent } from './sidebar/app.sidebartabcontent.component';
import { AppFooterComponent } from './app.footer.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { EmptyComponent } from './empty/empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { DataComponent } from './data/data.component';
import { PanelsComponent } from './panels/panels.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { MenusComponent } from './menus/menus.component';
import { ChartsComponent } from './charts/charts.component';

// Services
import { CarService } from './../service/service/carservice';
import { CountryService } from './../service/service/countryservice';
import { NodeService } from './../service/service/nodeservice';
import { AuthenticationService } from './../service/service/AuthenticationService';
import { AuthGuard } from './../service/service/index';
import { AuthService } from './../service/service/index';
import { UserService } from './../service/service/index';
import { ListDosenService } from './../service/service/getDosen';

import { UtilsComponent } from './utils/utils.component';
import { MessagesComponent } from './messages/messages.component';
import { FileComponent } from './file/file.component';
import { MiscComponent } from './misc/misc.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent, AppSettingComponent } from './sidebar/sidebar.component';
import { MenuComponent, AppSubMenuComponent } from './menu/menu.component';
import { AddMahasiswaComponent } from './add-mahasiswa/add-mahasiswa.component';
import { AddDosenComponent } from './add-dosen/add-dosen.component';
import { DaftarMahasiswaComponent } from './daftar-mahasiswa/daftar-mahasiswa.component';
import { ChooseDosenComponent } from './choose-dosen/choose-dosen.component';
import { ListMhsDaftarComponent } from './list-mhs-daftar/list-mhs-daftar.component';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { GuidanceComponent } from './guidance/guidance.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebartabcontentComponent,
    AppFooterComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ErrorComponent,
    EmptyComponent,
    DashboardComponent,
    FormsComponent,
    DataComponent,
    PanelsComponent,
    OverlaysComponent,
    MenusComponent,
    ChartsComponent,
    UtilsComponent,
    MessagesComponent,
    FileComponent,
    MiscComponent,
    TopbarComponent,
    SidebarComponent,
    AppSettingComponent,
    MenuComponent,
    AppSubMenuComponent,
    AddMahasiswaComponent,
    AddDosenComponent,
    DaftarMahasiswaComponent,
    ChooseDosenComponent,
    ListMhsDaftarComponent,
    FormValidateComponent,
    GuidanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    ColorPickerModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    SharedModule,
    ContextMenuModule,
    DataGridModule,
    DataListModule,
    DataScrollerModule,
    DataTableModule,
    DialogModule,
    DragDropModule,
    DropdownModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    GrowlModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    ScheduleModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    StepsModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    PdfViewerModule
  ],
  providers: [
    CarService,
    CountryService,
    NodeService,
    AuthenticationService,
    AuthService,
    AuthGuard,
    UserService,
    ListDosenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
