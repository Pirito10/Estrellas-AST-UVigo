const { json } = require("express");
const  axios  = require("axios");
const Compras = require("../models/compras")

exports.createCompras = async (req, res) => {

try {
        console.log("entré");
        const id=req.body.id_articulo; //id_articulo
        const cantidad=req.body.cantidad; //cantidad de la request
        console.log(id);
        console.log(cantidad);
        try{
                await axios.patch(`http://localhost:3001/estrellas/${id}`,{cantidad: -cantidad});

        }catch(error){
                return res.status(500).send(error.response.data.error)    
        }

let compras;
//Create compras
compras = new Compras(req.body);

await compras.save();
res.send(compras);
console.log('Se ha registrado una nueva compra')

} catch (error) {
console.log(error);
res.status(500).send('There was an error on the server')
}
}

exports.getCompras = async (req, res) => {

    try {
    
    const compras = await Compras.find();
    res.json(compras);
    
    } catch (error) {
    console.log(error);
    res.status(500).send('There was an error on the server');
    }
}

exports.getComprasCantidad = async (req, res) => {
                console.log(req.body.id);
                console.log(req.body.cantidad);
                console.log("Busqueda por cantidad");
                const compras = await Compras.find();
                var compras_cantidad=new Array();
                var cantidad=new Array();
                var j=0;
                for(var i=0;i<compras.length;i++){
 
                        if(compras[i].cantidad<=req.body.cantidad){
                                 compras_cantidad[j]=compras[i];
                                 j++;
                         }
                }
                
                var j=0;
                for(var i=0;i<compras_cantidad.length;i++){
 
                        if(compras_cantidad[i].id_cliente==req.body.id){
                                 cantidad[j]=compras_cantidad[i];
                                 j++;
                         }
                }
                res.json(cantidad);
                 
                 if(!compras){
                         res.status(404).json({msg:'Compra no encontrada,pruebe con otra'})
                 }
 } 

exports.getACompra = async (req, res) => {

        try {
                console.log("Entré");
                const compras = await Compras.findById(req.params.id);
         
                if(!compras){
                 //res.status(404).json({msg:'Compra no encontrada,pruebe con otra'})
                 var compras_vacio=new Array();
                 compras_vacio.cantidad=0;
                 res.json(compras_vacio);
                 }
                 
                 res.json(compras);


        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        
        }
        }


exports.updateCompra = async (req, res) => {
        try {
                
        /*const comprador = req.body.comprador;
        const direccion = req.body.direccion;

        console.log(comprador);
        console.log(direccion);*/

        let compras = await Compras.findById(req.params.id);
        
        if(!compras){
        res.status(404).json({msg:'Compra not found, try with other compra'})
        }
        
        compras.comprador = req.body.comprador;
        compras.direccion = req.body.direccion;
        

        compras = await Compras.findOneAndUpdate({_id : req.params.id}, compras, {new:true})
        console.log(compras);
        res.json(compras);
        console.log('Se ha actualizado una compra')

        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        }
}

exports.listcompras = async (req, res) => {

        try {

                const compras = await Compras.find();
                var compras_id=new Array();
                 var j=0;
                console.log(compras.length);
                for(var i=0;i<compras.length;i++){
 
                        if(compras[i].id_cliente==req.params.id){
                                 compras_id[j]=compras[i];
                                 console.log(compras_id[i]);
                                 j++;
                         }
                }
                res.json(compras_id);

                if(!compras){
                        res.status(404).json({msg:'Estrella no encontrada,pruebe con otra'})
                }
                 
        /*else{
                const estrellas = await Estrellas.find();
               var estrellas_e=new Array();
                var j=0;
               for(var i=0;i<estrellas.length;i++){

                       if((estrellas[i].edad<=req.params.edad) & (estrellas[i].edad!=null)){
                                estrellas_e[j]=estrellas[i];
                                j++;
                        }
               }
               res.json(estrellas_e);
                
                if(!estrellas){
                        res.status(404).json({msg:'Estrella no encontrada,pruebe con otra'})
                }
        }*/

      
        
        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        
        }
        }

exports.deleteCompra = async (req, res) => {
       
        try {
        let compras = await Compras.findById(req.params.id);
       
        if(!compras){
        res.status(404).json({msg:'Estrella not found, try with other estrella'})
        }
        console.log("Entrando en delete");
        const id=compras.id_articulo; //id_articulo
        const cantidad=compras.cantidad; //cantidad de la request
        console.log(id);
        console.log(cantidad);
        
        try{
                await axios.patch(`http://localhost:3001/estrellas/${id}`,{cantidad: cantidad});

        }catch(error){
                return res.status(500).send(error.response.data.error)    
        }
        
        await Compras.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Compra deleted successfully"})

        console.log('Se ha eliminado una compra')
        
        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        }
}
exports.rolUsuario = async (req, res) => {

        try{
                var rol =await axios.get(`http://localhost:3002/usuarios/rol/${id}`);

        }catch(error){
                return res.status(500).send(error.response.data.error)    
        }
        
        }