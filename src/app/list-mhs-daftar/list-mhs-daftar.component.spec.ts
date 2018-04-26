import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMhsDaftarComponent } from './list-mhs-daftar.component';

describe('ListMhsDaftarComponent', () => {
  let component: ListMhsDaftarComponent;
  let fixture: ComponentFixture<ListMhsDaftarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMhsDaftarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMhsDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
