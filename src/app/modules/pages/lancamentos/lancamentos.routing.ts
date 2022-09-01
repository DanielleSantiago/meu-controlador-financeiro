import { Routes } from '@angular/router';
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component';
import { LancamentosListComponent } from './lancamentos-list/lancamentos-list.component';
import { LancamentosComponent } from './lancamentos.component';


export const LANCAMENTOS_ROUTES: Routes = [
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

