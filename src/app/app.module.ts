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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TablaComponent
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
