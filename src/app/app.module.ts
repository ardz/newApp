import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import {NewDogComponent} from './newdog/newdog.component';

import {DogComponent} from './dog/dog.component';
import {HeroComponent} from './hero/hero.component';
import {HomeComponent} from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        NewDogComponent,
        DogComponent,
        HeroComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
