import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoDestinatarioComponent } from './nuevo-destinatario.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BancosExternosService } from '../../service/bancos-externos.service';

const routes: Routes = [
  {
    path: '',
    component: NuevoDestinatarioComponent,
  },
];
@NgModule({
  declarations: [NuevoDestinatarioComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [BancosExternosService],
  exports: [RouterModule],
})
export class NuevoDestinatarioModule {}
