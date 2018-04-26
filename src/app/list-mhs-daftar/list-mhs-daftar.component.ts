import { Component, OnInit } from '@angular/core';
import { CarService } from './../../service/service/carservice';
import { Car } from './../../service/domain/car';


@Component({
  selector: 'app-list-mhs-daftar',
  templateUrl: './list-mhs-daftar.component.html',
  styleUrls: ['./list-mhs-daftar.component.css']
})
export class ListMhsDaftarComponent implements OnInit {
  carouselCars: Car[];

  constructor() { }

  ngOnInit() {
    this.carouselCars = [
      { mhs: 'Aji Tirta Sundawa', nim: 201383090, dospemFirst: 'Fransiskus Adikara', dospemSecond: 'Lestanto Pudji Santosa', dospemThird: 'Munawar' },
      { mhs: 'Akis Dajjal Latuconsina', nim: 201383091, dospemFirst: 'Yulhendri Tai', dospemSecond: 'Pudji Santosa', dospemThird: 'Riya' },
      { mhs: 'Ricky Hermawan', nim: 201383092, dospemFirst: 'Holder Simorangkir', dospemSecond: 'Sri Kiliwati', dospemThird: 'Sri' },
    ];
  }

}
