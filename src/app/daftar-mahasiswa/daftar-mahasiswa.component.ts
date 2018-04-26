import { Component, OnInit } from '@angular/core';
import { Car } from './../../service/domain/car';
import { CarService } from './../../service/service/carservice';

@Component({
  selector: 'app-daftar-mahasiswa',
  templateUrl: './daftar-mahasiswa.component.html',
  styleUrls: ['./daftar-mahasiswa.component.css']
})
export class DaftarMahasiswaComponent implements OnInit {

  carouselCars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {

    this.carouselCars = [
      { mhs: 'r3278r2', nim: 2010, dospemFirst: 'Audi', dospemSecond: 'Black', dospemThird: '' },
      { mhs: 'jhto2g2', nim: 2015, dospemFirst: 'BMW', dospemSecond: 'White', dospemThird: '' },
      { mhs: 'h453w54', nim: 2012, dospemFirst: 'Honda', dospemSecond: 'Blue', dospemThird: '' },
      { mhs: 'g43gwwg', nim: 1998, dospemFirst: 'Renault', dospemSecond: 'White', dospemThird: '' },
      { mhs: 'gf45wg5', nim: 2011, dospemFirst: 'VW', dospemSecond: 'Red', dospemThird: '' },
      { mhs: 'bhv5y5w', nim: 2015, dospemFirst: 'Jaguar', dospemSecond: 'Blue', dospemThird: '' },
      { mhs: 'ybw5fsd', nim: 2012, dospemFirst: 'Ford', dospemSecond: 'Yellow', dospemThird: '' },
      { mhs: '45665e5', nim: 2011, dospemFirst: 'Mercedes', dospemSecond: 'Brown', dospemThird: '' },
      { mhs: 'he6sb5v', nim: 2015, dospemFirst: 'Ford', dospemSecond: 'Black', dospemThird: '' }
    ];
  }

}
