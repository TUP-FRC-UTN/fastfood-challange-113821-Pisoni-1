import { Component, inject } from '@angular/core';
import { ComandasServiceService } from '../comandas-service.service';
import { Pedidos } from '../Models/Pedidos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poscomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poscomponent.component.html',
  styleUrl: './poscomponent.component.css'
})
export class POSComponentComponent {
pedido : Pedidos = new Pedidos();
cargarPedido(Formulario: NgForm) {
  if (Formulario.valid){
    this.servicio.cargarPedido(this.pedido);
  }
  this.pedido = new Pedidos();
}

  servicio = inject(ComandasServiceService); //inject con minuscula!! 
}
