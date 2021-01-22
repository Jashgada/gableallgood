import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlatform } from './platform.model';
import { PlatformService } from './platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
Platform:string = "Platform";
platforms: Observable<IPlatform[]>;
  showContentToggle:boolean = false;
  constructor(private platformService: PlatformService) { }

  ngOnInit(): void {
    this.platforms = this.platformService.getPlatforms();
    console.log(this.platforms);
  }
  onHeaderClick():void{
    this.showContentToggle = !this.showContentToggle;

  }

}
