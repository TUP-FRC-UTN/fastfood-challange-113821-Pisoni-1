import { Component, inject } from '@angular/core';
import { ComandasServiceService } from '../comandas-service.service';
import { Pedidos } from '../Models/Pedidos';

@Component({
  selector: 'app-resto-component',
  standalone: true,
  imports: [],
  templateUrl: './resto-component.component.html',
  styleUrl: './resto-component.component.css'
})
export class RestoComponentComponent {
  servicio = inject(ComandasServiceService); //inject con minuscula!! 
  pedido : Pedidos = new Pedidos();
  ListaPedidosIngresados : Pedidos []= [];

  ngOnInit(){
    this.ListaPedidosIngresados = this.servicio.getAllPedidosGeneral();
  }

  mostrarParaEntregar(){
    return this.servicio.getAllPedidosRealizados();
  }

  cargarHistorico(pedido : Pedidos){
    this.servicio.cargarListaHistorica(pedido);
    this.servicio.eliminarPedidoRealizado(pedido);
  }

  

}
