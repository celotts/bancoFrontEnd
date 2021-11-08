import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiBancoComponent } from './mi-banco.component';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from '../historial/historial.component';
import { TransferirComponent } from '../transferir/transferir.component';
import { NuevoDestinatarioComponent } from '../nuevo-destinatario/nuevo-destinatario.component';
const routes: Routes = [
  {
    path: '',
    component: MiBancoComponent,
    children: [
      {
        path: 'historial',
        component: HistorialComponent,
      },
      {
        path: 'transferir',
        component: TransferirComponent,
      },
      {
        path: 'nuevo-destinatario',
        component: NuevoDestinatarioComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [MiBancoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MiBancoComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MiBancoModule {}
