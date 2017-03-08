import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog/dog';

@Component({
    selector: 'dog',
    template: require ('./dog.component.html'),
    styles: [require ('./dog.component.css')],
    providers: []
})

export class DogComponent implements OnInit {

    /*** Local variables */


    /** Constuctor */ //register services / providers here
    constructor() { }


    /** Initialisation */ // logic on load of component
    ngOnInit(){

    }
}  