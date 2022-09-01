import { Routes } from '@angular/router';
import { LancamentosComponent } from './modules/pages/lancamentos/lancamentos.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LancamentosComponent,
    loadChildren: () =>
      import('./modules/pages/lancamentos/lancamentos.module').then(
        (m) => m.LancamentosModule
      ),
    data: { breadcrumb: null },
  },
];

