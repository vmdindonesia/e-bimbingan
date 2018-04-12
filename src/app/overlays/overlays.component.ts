import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.css'],
  providers: [ConfirmationService]
})
export class OverlaysComponent implements OnInit {

  images: any[];

  display: boolean;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    
    this.images = [];
    this.images.push({source: 'assets/demo/images/sopranos/sopranos1.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Nature 1'});
    this.images.push({source: 'assets/demo/images/sopranos/sopranos2.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Nature 2'});
    this.images.push({source: 'assets/demo/images/sopranos/sopranos3.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Nature 3'});
    this.images.push({source: 'assets/demo/images/sopranos/sopranos4.jpg',
      thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Nature 4'});
}

confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure to perform this action?'
    });
}

}
