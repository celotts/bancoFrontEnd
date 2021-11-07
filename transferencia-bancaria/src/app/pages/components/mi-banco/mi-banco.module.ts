import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiBancoComponent } from './mi-banco.component';

@NgModule({
  declarations: [MiBancoComponent],
  imports: [CommonModule],
  exports: [MiBancoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MiBancoModule {}
