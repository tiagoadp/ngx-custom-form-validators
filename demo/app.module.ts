import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NgxCustomValidator } from '../app/custom-validator';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }