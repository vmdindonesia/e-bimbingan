import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDosenComponent } from './add-dosen.component';

describe('AddDosenComponent', () => {
  let component: AddDosenComponent;
  let fixture: ComponentFixture<AddDosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
