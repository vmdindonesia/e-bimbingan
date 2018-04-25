import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMahasiswaComponent } from './add-mahasiswa.component';

describe('AddMahasiswaComponent', () => {
  let component: AddMahasiswaComponent;
  let fixture: ComponentFixture<AddMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
