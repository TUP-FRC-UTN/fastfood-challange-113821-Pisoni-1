import { Injectable } from '@angular/core';
import { Pedidos } from './Models/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class ComandasServiceService {

  constructor() { }

  ListaPendientes: Pedidos [] = []; 
  ListaRealizados: Pedidos [] = [];
  ListaHistorica: Pedidos [] = [];
  id : number = 0;

  cargarPedido(pedido : Pedidos){
    this.ListaPendientes.push(pedido);
  }

  eliminarPedido(pedido : Pedidos){
    let index : number;
    index=this.ListaPendientes.indexOf(pedido);
    this.ListaPendientes.splice(index, 1);
  }

  cargarPedidoRealizado(pedido:Pedidos){
    this.ListaRealizados.push(pedido);
  }

  cargarListaHistorica(pedido:Pedidos){
    this.ListaHistorica.push(pedido);
  }

  eliminarPedidoRealizado(pedido : Pedidos){
    let index : number;
    index=this.ListaRealizados.indexOf(pedido);
    this.ListaRealizados.splice(index, 1);
  }

  getPedidosPendientes(): Pedidos[] {
    return this.ListaPendientes; 
  }

  getAllPedidosPendientes(){
    return this.ListaPendientes;
  }

  getPedidosRealizados(index: number){
    this.ListaRealizados.filter; 
  }

  getAllPedidosRealizados(){
    return this.ListaRealizados;
  }

  getById(num : number){
    return this.ListaPendientes.filter(p => p.numero === num)[0];
  }

  getAllPedidosGeneral(){
    return this.ListaHistorica;
  }

}



/*

POS
Cargar en el POS el nombre y el pedido con el boton de ordenar

COCINA
Mandar este pedido a la cocina y ponerlos en dos listas
1-Pendientes de Cocinar boton cocinar
2-Pedidos en Coccion boton Pedido Terminado!

Restaurant
Lista de pedidos ingresados

Lista Pedidos listos para entregar
•...... boton entregar

*/