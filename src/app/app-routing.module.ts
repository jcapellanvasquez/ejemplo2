import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { Lista1Component } from './lista1/lista1.component';
import { Lista2Component } from './lista2/lista2.component';
import { SessionGuard } from './session.guard';


const routes: Routes = [
  {
    component: ListaComponent,
    path: 'listado/:id',
    canActivate: [SessionGuard],
    children: [
      {
        path: 'lista1',
        component: Lista1Component,
      },
      {
        path: 'lista2',
        component: Lista2Component,
      }
    ]
  },
  { component: MantenimientoComponent, path: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
