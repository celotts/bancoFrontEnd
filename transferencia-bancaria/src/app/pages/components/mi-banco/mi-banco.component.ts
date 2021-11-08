import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-banco',
  templateUrl: './mi-banco.component.html',
  styleUrls: ['./mi-banco.component.scss'],
})
export class MiBancoComponent implements OnInit {
  titulo: string;
  tituloAccion: string;
  constructor(private router: Router) {
    this.titulo = 'Nueva Transferencia';
    this.tituloAccion = '';
    this.nuevoDestinatario();
  }

  ngOnInit(): void {}
  nuevoDestinatario() {
    this.tituloAccion = 'Nuevo Destinatario';
    this.router.navigate(['/nuevoDestinatario']);
  }

  transferenciaDestinatario() {
    this.tituloAccion = 'Transferir';
    this.router.navigate(['/transferir']);
  }

  movimientoTransferencia() {
    this.tituloAccion = 'Historial';
    this.router.navigate(['/historial']);
  }
}
