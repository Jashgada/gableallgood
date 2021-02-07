import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html',
    styles:[
    `p{
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
        font-size: 11pt;
    }
    
    H3{
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        font-size: 28pt;
    }`]
})
export class CollapsibleWellComponent implements OnInit{
    @Input() title: string;
    visible = false;

    ngOnInit(){
        
    }
    toggleContent(){
        this.visible = !this.visible;
    }
}