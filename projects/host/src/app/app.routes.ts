import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {loadRemoteModule} from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './routes',
      })
        .then((m) => m.FLIGHTS_ROUTES)
        .catch((err) => console.error(err)),
  },

  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'staffs',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe2',
        exposedModule: './routes',
      })
        .then((m) => m.STAFFS_ROUTES)
        .catch((err) => console.error(err)),
  },
];
