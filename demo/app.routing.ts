import { ModuleWithProviders }  from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'

export const routes: Routes = [
    { path: '', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);