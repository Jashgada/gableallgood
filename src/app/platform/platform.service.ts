import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { IPlatform } from './platform.model';

@Injectable()
export class PlatformService{
    getPlatforms():Observable<IPlatform[]>{

        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(PLATFORMS); subject.complete(); },
        100)
        return subject;
    }
}


const PLATFORMS: IPlatform[] = [
    {
        name: "Platform1",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform2",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform3",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform4",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Platform5",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]