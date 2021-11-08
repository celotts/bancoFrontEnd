import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBancoComponent } from './mi-banco.component';

describe('MiBancoComponent', () => {
  let component: MiBancoComponent;
  let fixture: ComponentFixture<MiBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiBancoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create function nuevoDestinatario', () => {
    expect(component.nuevoDestinatario).toBeTruthy();
  });
  it('should create function transferenciaDestinatario', () => {
    expect(component.transferenciaDestinatario).toBeTruthy();
    expect(component.tituloAccion === '').toBeTrue();
  });
  it('should create function transferenciaDestinatario', () => {
    expect(component.movimientoTransferencia).toBeTruthy();
  });
});
