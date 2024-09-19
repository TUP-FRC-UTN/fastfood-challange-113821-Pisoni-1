import { Component, inject } from '@angular/core';
import { ComandasServiceService } from '../comandas-service.service';
import { Pedidos } from '../Models/Pedidos';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-component',
  standalone: true,
  imports: [],
  templateUrl: './kitchen-component.component.html',
  styleUrl: './kitchen-component.component.css'
})

export class KitchenComponentComponent implements OnInit{
  pedido : Pedidos = new Pedidos();
  ListaPedidos : Pedidos [] = [];
  estaCoccion? : Pedidos = undefined;
  servicio = inject(ComandasServiceService); //inject con minuscula!! 
  ngOnInit(): void {
    this.ListaPedidos = this.servicio.getPedidosPendientes();
  }
  
  cargarPedidoListo(){
    if(this.estaCoccion!){
      this.servicio.cargarPedidoRealizado(this.estaCoccion!);
      this.estaCoccion = undefined; 
    }else{
      alert('No hay pedidos en cocción');}
   }

  cargarEnCoccion(pedido : Pedidos){
    if(this.estaCoccion != null){
      alert('Ya hay pedidos en cocción. Aguarde un instante por favor.');
    }else{
    this.estaCoccion = this.servicio.getById(pedido.numero);
    this.servicio.eliminarPedido(pedido);}
  }

}


