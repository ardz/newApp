import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DogComponent} from './dog/dog.component';
import {HeroComponent} from './hero/hero.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroes', component: HeroComponent },
    { path: 'dog', component: DogComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
