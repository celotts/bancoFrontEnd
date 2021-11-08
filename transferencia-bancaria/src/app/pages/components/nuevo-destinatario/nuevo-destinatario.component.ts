import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BancosExternosService } from "../../service/bancos-externos.service";

@Component({
	selector: "app-nuevo-destinatario",
	templateUrl: "./nuevo-destinatario.component.html",
	styleUrls: ["./nuevo-destinatario.component.scss"]
})
export class NuevoDestinatarioComponent implements OnInit {
	Bancos: any = [];

	tipoCuentas = [];

	destinatario = new FormGroup({
		rut: new FormControl(""),
		nombre: new FormControl(""),
		correo: new FormControl(""),
		telefono: new FormControl(""),
		banco: new FormControl(""),
		tipoCuenta: new FormControl(""),
		numeroCuenta: new FormControl("")
	});
	constructor(public fb: FormBuilder, private bancoExternoService: BancosExternosService) {}

	async ngOnInit() {
		console.log(222);
		await this.bancoExternoService.getTipoCuenta().then(res => {
			this.tipoCuentas = res as any;
		});
		await this.bancoExternoService.obtenerBancosExternos().then(res => {
			this.Bancos = res.data;
		});
	}
}
