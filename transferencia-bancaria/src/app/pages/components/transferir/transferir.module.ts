import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferirComponent } from './transferir.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TransferirComponent,
  },
  {
    path: 'transferir',
    component: TransferirComponent,
  },
];

@NgModule({
  declarations: [TransferirComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferirModule {}
