import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDosenComponent } from './choose-dosen.component';

describe('ChooseDosenComponent', () => {
  let component: ChooseDosenComponent;
  let fixture: ComponentFixture<ChooseDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
