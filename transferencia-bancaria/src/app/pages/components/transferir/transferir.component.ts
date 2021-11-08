import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.scss'],
})
export class TransferirComponent implements OnInit {
  transferencia = new FormGroup({
    banco: new FormControl(''),
    monto: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
