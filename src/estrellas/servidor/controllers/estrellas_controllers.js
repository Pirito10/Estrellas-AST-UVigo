const { json } = require("express");
const Estrellas = require("../models/estrellas")
const axios = require("axios");

exports.createEstrellas = async (req, res) => {

try {
let estrellas;
//Create estrellas
estrellas = new Estrellas(req.body);

await estrellas.save();
res.send(estrellas);
console.log('Se ha registrado una nueva estrella')

} catch (error) {
console.log(error);
res.status(500).send('There was an error on the server')
}
}

exports.getEstrellas = async (req, res) => {

    try {
    
    const estrellas = await Estrellas.find();
    res.json(estrellas);
    
    } catch (error) {
    console.log(error);
    res.status(500).send('There was an error on the server');
    }
}

exports.getAEstrella = async (req, res) => {

        try {

                const estrella = await Estrellas.findById(req.params.id);
         
                if(!estrella){
                 res.status(404).json({msg:'Estrella no encontrada,pruebe con otra'})
                 }
                 
                 res.json(estrella);

        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        
        }
        }

exports.getEstrella = async (req, res) => {

        try {
               
        if(req.params.id==undefined & req.params.edad==undefined){
                
               const estrellas = await Estrellas.find();
               var estrellas_precios=new Array();
                var j=0;
               for(var i=0;i<estrellas.length;i++){

                       if(estrellas[i].precio<=req.params.precio){
                                estrellas_precios[j]=estrellas[i];
                                j++;
                        }
               }
               res.json(estrellas_precios);
                
                if(!estrellas){
                        res.status(404).json({msg:'Estrella no encontrada,pruebe con otra'})
                }
        }else if(req.params.precio==undefined & req.params.edad==undefined){
                try{
                     const estrella = await Estrellas.findById(req.params.id); 
                     var estrella_id=new Array();
                     estrella_id.push(estrella);                    
                     res.json(estrella_id); 

                } catch (error) {
                var estrellas_id=new Array();
                res.json(estrellas_id);
                 
                 }    
        }/*else{
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


exports.updateEstrella = async (req, res) => {
        try {
        
        const { nombre, tipo_espectral, luminosidad, masa,radio,edad,distancia,constelacion,precio,cantidad,examen } = req.body;
        let estrellas = await Estrellas.findById(req.params.id);
        
        if(!estrellas){
        res.status(404).json({msg:'Estrellas not found, try with other estrellas'})
        }
        
        estrellas.tipo_espectral = tipo_espectral;
        estrellas.luminosidad = luminosidad;
        estrellas.masa = masa;
        estrellas.radio = radio;
        estrellas.constelacion = constelacion;
        estrellas.edad = edad;
        estrellas.distancia = distancia;
        estrellas.nombre = nombre;
        estrellas.precio = precio;
        estrellas.cantidad = cantidad;
        estrellas.examen = examen;
        
        estrellas = await Estrellas.findOneAndUpdate({_id : req.params.id}, estrellas, {new:true})
        res.json(estrellas);
        console.log('Se ha actualizado una estrella')
        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        }
}

exports.deleteEstrella = async (req, res) => {

        try {
        
        let estrellas = await Estrellas.findById(req.params.id);
        
        if(!estrellas){
        res.status(404).json({msg:'Estrella not found, try with other estrella'})
        }
        
        await Estrellas.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Estrella deleted successfully"})

        console.log('Se ha eliminado una estrella')
        
        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        }
}
exports.patchEstrellas= async (req, res) => {

        const id=req.params.id; //id_articulo
        //const cantidad=req.body.cantidad; //cantidad de la request
       // console.log(id);
        //console.log(cantidad)

        const estrella= await Estrellas.findById(req.params.id);
        //console.log("entré");
        if(!estrella){
                res.status(404).json({error:`No se ha encontrado ningún artículo con ID: ${id}`})
                }
                console.log(estrella.cantidad)
        const cantidad_final=estrella.cantidad+req.body.cantidad;
        if(cantidad_final<0){
                return res.status(500).json({error:`No hay suficientes artículos`})
        }
        estrella.cantidad=cantidad_final;
        console.log(estrella.cantidad)
       // console.log(estrella);
        await estrella.save();
        res.send();


}
exports.rolUsuario = async (req, res) => {

        try{
                var rol =await axios.get(`http://localhost:3002/usuarios/rol/${id}`);

        }catch(error){
                return res.status(500).send(error.response.data.error)    
        }
        
        }

