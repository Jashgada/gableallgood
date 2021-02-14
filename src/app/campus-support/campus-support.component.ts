import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportService } from './campus-support.service';

@Component({
  selector: 'app-campus-support',
  templateUrl: './campus-support.component.html',
  styleUrls: ['./campus-support.component.css']
})


export class CampusSupportComponent implements OnInit {

  supports: Observable<any[]>;
  modalImg:string;
  imgOpen:boolean = false;
  constructor( private supportService: SupportService) { }

  ngOnInit(): void {
this.supports = this.supportService.getSupports();
  }

  openImage(src:string){
    this.modalImg = src;
this.imgOpen = true;
    console.log(src);
  }
closeImage(){
  this.imgOpen = false;
}
}
