import { Routes } from '@angular/router';
import { LancamentosFormComponent } from './modules/pages/lancamentos/lancamentos-form/lancamentos-form.component';
import { LancamentosListComponent } from './modules/pages/lancamentos/lancamentos-list/lancamentos-list.component';
import { LancamentosComponent } from './modules/pages/lancamentos/lancamentos.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LancamentosComponent,
    children: 
    [
      {
        path: '',
        component: LancamentosListComponent
      },
      {
        path: 'cadastro',
        component: LancamentosFormComponent,
      },
    ]
  },
];

