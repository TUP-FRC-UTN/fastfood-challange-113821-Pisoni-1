export class Pedidos{
    numero : number = Math.floor(Math.random() * 1000) + 1;
    name : string = '';
    description: string = '';
    date: Date = new Date();    //por defecto crea la actual    
}