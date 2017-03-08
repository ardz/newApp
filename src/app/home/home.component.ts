import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: require ('./home.component.html'),
    styles: [require ('./home.component.css')],
    providers: []
})

export class HomeComponent implements OnInit {

    /*** Local variables */


    /** Constuctor */ 
    constructor() { }


    /** Initialisation */ // logic on load of component
    ngOnInit(){
        
    }
}  