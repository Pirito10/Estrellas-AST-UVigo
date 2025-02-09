export class Compras{
  _id?:any;
  id_articulo: string;
  id_cliente: string;
  cantidad: number;
  comprador:string;
  direccion:string;

  constructor(cantidad:number, id_articulo: string, id_cliente: string, comprador: string, direccion: string){

    this.cantidad=cantidad;
    this.id_articulo = id_articulo;
    this.id_cliente = id_cliente;
    this.comprador = comprador;
    this.direccion = direccion;

  }
}