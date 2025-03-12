import { Routes } from '@angular/router';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'coffee', component: CoffeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
