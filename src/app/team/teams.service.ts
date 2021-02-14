import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMember } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getMembers(){

      let subject = new Subject<IMember[]>();
      setTimeout(()=> {subject.next(TEAMS); subject.complete(); },
      100)
      return subject;
      console.log();
  }
  }



const TEAMS:IMember[] =
  [
    {
        name:"Josh Squirrell",
        address: "../../assets/team-pictures/Josh_Squirrell1.jpg",
        addressHover:"../../assets/team-pictures/Josh_Squirrell2.jpg",
        addressHoverOut:"../../assets/team-pictures/Josh_Squirrell1.jpg"

    },
    {
      name:"Alex Van Haaren",
      address: "../../assets/team-pictures/member1.jpg",
      addressHover:"../../assets/team-pictures/member1.jpg",
      addressHoverOut:"../../assets/team-pictures/member1.jpg"

    },
    {
      name:"Your mom",
      address: "../../assets/team-pictures/member1.jpg",
      addressHover:"../../assets/team-pictures/member1.jpg",
      addressHoverOut:"../../assets/team-pictures/member1.jpg"

    },
    {
      name:"Your mom",
      address: "../../assets/team-pictures/member1.jpg",
      addressHover:"../../assets/team-pictures/member1.jpg",
      addressHoverOut:"../../assets/team-pictures/member1.jpg"

    },
    {
      name:"Your mom",
      address: "../../assets/team-pictures/member1.jpg",
      addressHover:"../../assets/team-pictures/member1.jpg",
      addressHoverOut:"../../assets/team-pictures/member1.jpg"

    },
    {
      name:"Your mom",
      address: "../../assets/team-pictures/member1.jpg",
      addressHover:"../../assets/team-pictures/member1.jpg",
      addressHoverOut:"../../assets/team-pictures/member1.jpg"

    }

]

