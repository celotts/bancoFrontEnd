import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-banco',
  templateUrl: './mi-banco.component.html',
  styleUrls: ['./mi-banco.component.scss'],
})
export class MiBancoComponent implements OnInit {
  titulo: string;
  tituloAccion: string;
  constructor() {
    this.titulo = 'Nueva Transferencia';
    this.tituloAccion = '';
    this.nuevoDestinatario();
  }

  ngOnInit(): void {}
  nuevoDestinatario() {
    this.tituloAccion = 'Nuevo Destinatario';
  }

  transferenciaDestinatario() {
    this.tituloAccion = 'Transferir';
  }

  movimientoTransferencia() {
    this.tituloAccion = 'Historial';
  }
}
