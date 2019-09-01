import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBoostrapSharedModule } 
from './ng-boostrap-shared/ng-boostrap-shared.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { ListaComponent } from './lista/lista.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { Lista1Component } from './lista1/lista1.component';
import { Lista2Component } from './lista2/lista2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablaComponent,
    ListaComponent,
    MantenimientoComponent,
    Lista1Component,
    Lista2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBoostrapSharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng g m NgBoostrapShared
