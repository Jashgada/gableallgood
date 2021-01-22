import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html' 
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