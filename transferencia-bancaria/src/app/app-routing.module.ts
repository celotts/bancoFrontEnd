import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nuevoDestinatario',
    loadChildren: () =>
      import(
        './pages/components/nuevo-destinatario/nuevo-destinatario.module'
      ).then((m) => m.NuevoDestinatarioModule),
  },
  {
    path: 'transferir',
    loadChildren: () =>
      import('./pages/components/transferir/transferir.module').then(
        (m) => m.TransferirModule
      ),
  },
  {
    path: 'historial',
    loadChildren: () =>
      import('./pages/components/historial/historial.module').then(
        (m) => m.HistorialModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
