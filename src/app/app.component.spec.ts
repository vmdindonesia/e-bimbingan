import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { AppTopbarComponent } from './app.topbar.component';
import { AppSideBarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppSidebartabcontentComponent } from './app.sidebartabcontent.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppTopbarComponent,
        AppSideBarComponent,
        AppSidebartabcontentComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppFooterComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
