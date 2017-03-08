import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'new-dog',
    template: require ('./newdog.component.html'),
    styles: [require ('./newdog.component.css')],
    providers: []
})

export class NewDogComponent implements OnInit {

    /*** Local variables */
    public binding: string;

    /** Constuctor */ //register services / providers here
    constructor() {
    }


    /** Initialisation */ // logic on load of component
    ngOnInit() {

    }


    printBinding() {

        console.log(this.binding);
    }
}