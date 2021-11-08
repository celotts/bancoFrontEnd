import { Injectable } from '@angular/core';
import axios from 'axios';

export interface responseBanco {
  codigo?: string;
  mensaje?: string;
  data?: any;
  config?: any;
  headres?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
@Injectable({
  providedIn: 'root',
})
export class BancosExternosService {
  constructor() {}

  async obtenerBancosExternos(): Promise<any> {
    try {
      return await axios
        .get(`http://localhost:3004/obtenerBancos`)
        .then((response: responseBanco) => {
          console.log(response);
          if (response.data.code !== 200) return this.mensajeError(response);
          return {
            codigo: response.data.code,
            data: response.data.result,
          };
        });
    } catch (error) {
      console.log(error);
    }
  }

  mensajeError(response: any) {
    return { codigo: response.data.code, mensaje: response.data.message };
  }

  async getTipoCuenta() {
    return ['Cuenta Vista', 'Cuenta Corriente'];
  }
}
