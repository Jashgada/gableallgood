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

    getCampusExperience():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(CAMPUSEXP); subject.complete(); },
        100)
        return subject;
    }

    getAction():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(ACTION); subject.complete(); },
        100)
        return subject;
    }
    getSustainability():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(SUSTAINABILITY); subject.complete(); },
        100)
        return subject;
    }
    getVarsity():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(VARSITY); subject.complete(); },
        100)
        return subject;
    }
    getYourCampus():Observable<IPlatform[]>{
        let subject = new Subject<IPlatform[]>();
        setTimeout(()=> {subject.next(YOURCAMPUS); subject.complete(); },
        100)
        return subject;
    }
}


const PLATFORMS: IPlatform[] = [
    {
        name: "Career Studio Interview Booths",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Initiative Pipeline",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]

const CAMPUSEXP: IPlatform[] = [
    {
        name: "Career Studio Interview Booths",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Initiative Pipeline",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]

const ACTION: IPlatform[] = [
    {
        name: "Less Talk More Action",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Civil Discourse Training",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Mental Health Advocacy Week",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Your School, Your Voice Information Request",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]

const SUSTAINABILITY: IPlatform[] = [
    {
        name: "Reusable Dining Sets",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Everyone Eats - Bearcat Pantry Fuel Fridge",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Career Ready Clothing Drive",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]

const VARSITY: IPlatform[] = [
    {
        name: "The Women of One Team",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "Expand Bearcat Fridays",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    },
    {
        name: "UC Re-Envisioned",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]

const YOURCAMPUS: IPlatform[] = [
    {
        name: "Submit Your Platform Point",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!"
    }
]