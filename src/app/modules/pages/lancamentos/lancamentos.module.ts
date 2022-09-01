import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LancamentosFormComponent } from './lancamentos-form/lancamentos-form.component';
import { LancamentosListComponent } from './lancamentos-list/lancamentos-list.component';
import { LancamentosComponent } from './lancamentos.component';



@NgModule({
  declarations: [
    LancamentosComponent,
    LancamentosFormComponent,
    LancamentosListComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    SharedModule.forRoot()
  ],
  providers: [],
})
export class LancamentosModule {}
