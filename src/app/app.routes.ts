import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    // No tiene "export default" en reactive.routes.ts
    loadChildren: () => import('./reactive/reactive.routes').then((module) => module.reactiveRoutes),
  },
  {
    path: 'auth',
    // Sí tiene "export default" en auth.routes.ts
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'country',
    // No tiene "export default" en reactive.routes.ts
    loadChildren: () => import('./country/country.routes').then((module) => module.countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
