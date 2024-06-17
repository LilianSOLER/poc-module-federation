import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'flights', loadChildren: () => import('./flights/flights.routes').then(m => m.FLIGHTS_ROUTES)
  }
];
