import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarMahasiswaComponent } from './daftar-mahasiswa.component';

describe('DaftarMahasiswaComponent', () => {
  let component: DaftarMahasiswaComponent;
  let fixture: ComponentFixture<DaftarMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
