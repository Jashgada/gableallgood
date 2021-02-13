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
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"#bb0f55"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"#bb0f55"
    },
    {
        name: "Initiative Pipeline",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"#bb0f55"
    }
]

const CAMPUSEXP: IPlatform[] = [
    {
        name: "Career Studio Interview Booths",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"cherry"
    },
    {
        name: "Steger Student Center Office Markings",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"cherry"
    },
    {
        name: "Initiative Pipeline",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"cherry"
    }
]

const ACTION: IPlatform[] = [
    {
        name: "Less Talk More Action",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"yellowish"
    },
    {
        name: "Civil Discourse Training",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"yellowish"
    },
    {
        name: "Mental Health Advocacy Week",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"yellowish"
    },
    {
        name: "Your School, Your Voice Information Request",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"yellowish"
    }
]

const SUSTAINABILITY: IPlatform[] = [
    {
        name: "Reusable Dining Sets",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"darkmaroon"
    },
    {
        name: "Everyone Eats - Bearcat Pantry Fuel Fridge",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"darkmaroon"
    },
    {
        name: "Career Ready Clothing Drive",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"darkmaroon"
    }
]

const VARSITY: IPlatform[] = [
    {
        name: "The Women of One Team",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"isthischerry"
    },
    {
        name: "Expand Bearcat Fridays",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"isthischerry"
    },
    {
        name: "UC Re-Envisioned",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"isthischerry"
    }
]

const YOURCAMPUS: IPlatform[] = [
    {
        name: "Submit Your Platform Point",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nostrum ipsum, sit iusto ipsa illo? Laudantium accusantium sed eius animi!",
        color:"yellowish"
    }
]