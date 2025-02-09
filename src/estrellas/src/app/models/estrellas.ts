export class Estrellas{
  _id?:any;
  nombre: string;
  tipo_espectral: string;
  luminosidad:number;
  distancia:number;
  masa:number;
  radio:number;
  edad:number;
  constelacion:string;
  precio: number;
  cantidad:number;
  

  constructor(cantidad:number,nombre: string, tipo_espectral: string, precio: number, constelacion: string,luminosidad: number,distancia: number,masa: number,radio: number,edad: number){

    this.nombre = nombre;
    this.tipo_espectral = tipo_espectral;
    this.precio = precio;
    this.constelacion = constelacion;
    this.luminosidad = luminosidad;
    this.distancia = distancia;
    this.masa = masa;
    this.radio = radio;
    this.edad=edad;
    this.cantidad=cantidad;
   

  }
}