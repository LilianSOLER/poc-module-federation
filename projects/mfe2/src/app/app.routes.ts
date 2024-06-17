import {Routes} from '@angular/router';
import {StaffComponent} from "./staff/staff.component";

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./staff/staff.routes').then(m => m.STAFFS_ROUTES)
  }
];
