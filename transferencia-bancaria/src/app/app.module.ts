import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialModule } from './pages/components/historial/historial.module';
import { MiBancoModule } from './pages/components/mi-banco/mi-banco.module';
import { NuevoDestinatarioModule } from './pages/components/nuevo-destinatario/nuevo-destinatario.module';
import { TransferirModule } from './pages/components/transferir/transferir.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MiBancoModule,
    NuevoDestinatarioModule,
    TransferirModule,
    HistorialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
