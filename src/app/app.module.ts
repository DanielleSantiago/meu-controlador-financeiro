import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { LancamentosFormComponent } from './modules/pages/lancamentos/lancamentos-form/lancamentos-form.component';
import { LancamentosListComponent } from './modules/pages/lancamentos/lancamentos-list/lancamentos-list.component';
import { LancamentosComponent } from './modules/pages/lancamentos/lancamentos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    LancamentosFormComponent,
    LancamentosListComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
