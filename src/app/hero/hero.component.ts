import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
    selector: 'hero',
    template: require ('./hero.component.html'),
    styles: [require ('./hero.component.css')],
    providers: []
})

export class HeroComponent implements OnInit {

    /*** Local variables */
    public heroes: Hero[];
    public binding: string;

    /** Constuctor */ //register services / providers here
    constructor() { }


    /** Initialisation */ // logic on load of component
    ngOnInit(){

        const HEROES: Hero[] = [
            { id: 11, name: 'Mr. Nice'},
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        this.heroes = HEROES;
    }

    buttonClicked(hero: Hero){

        console.log(hero.name);   
    }

    printBinding(){

        console.log(this.binding);
    }
}  