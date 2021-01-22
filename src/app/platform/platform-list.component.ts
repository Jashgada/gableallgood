import { ITS_JUST_ANGULAR } from "@angular/core/src/r3_symbols";
import {Component, Input} from '@angular/core'
import { PlatformService } from "./platform.service";
import { IPlatform } from "./platform.model";
import { Observable } from "rxjs";

@Component({
    selector: 'platform-list',
    templateUrl: './platform-list.component.html'
})

export class PlatformListComponent{

    @Input() platforms: Observable<IPlatform[]>;
    constructor(){

    }

    ngOnInit(){
    }

} 