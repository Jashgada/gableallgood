import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';


@Injectable()
export class SupportService{
    getSupports():Observable<any[]>{

        let subject = new Subject<any[]>();
        setTimeout(()=> {subject.next(SUPPORT); subject.complete(); },
        100)
        return subject;
    }
}

const SUPPORT = [
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    },
    {
        address: "../../assets/campus-support/campus-support1.png"
    }

]