const { json } = require("express");
const Usuarios = require("../models/usuarios")

exports.createUsuario = async (req, res) => {
try {
let usuarios;
//Create usuarios
usuarios = new Usuarios(req.body);

await usuarios.save();
res.send(usuarios);
console.log('Se ha registrado un nuevo usuario')

} catch (error) {
console.log(error);
res.status(500).send('There was an error on the server')
}
}

exports.getUsuarios = async (req, res) => {

    try {
    
    const usuarios = await Usuarios.find();
    res.json(usuarios);
    
    } catch (error) {
    console.log(error);
    res.status(500).send('There was an error on the server');
    }
}

exports.getAdmin = async (req, res) => {

        try{
                const usuarios = await Usuarios.find();
                var usuarios_admin=new Array();
                 var j=0;
                for(var i=0;i<usuarios.length;i++){
 
                        if(usuarios[i].rol=="admin"){
                                 usuarios_admin[j]=usuarios[i];
                                 j++;
                         }
                }
                res.json(usuarios_admin);
                 
                 if(!usuarios){
                         res.status(404).json({msg:'No hay administradores en la base de datos'})
                 }

        } catch (error) {
                var usuarios_admin=new Array();
                res.json(usuarios_admin);
            
        }   
}

exports.getCliente = async (req, res) => {

        try{
                const usuarios = await Usuarios.find();
                var usuarios_cliente=new Array();
                 var j=0;
                for(var i=0;i<usuarios.length;i++){
 
                        if(usuarios[i].rol=="cliente"){
                                 usuarios_cliente[j]=usuarios[i];
                                 j++;
                         }
                }
                res.json(usuarios_cliente);
                 
                 if(!usuarios){
                         res.status(404).json({msg:'No hay clientes en la base de datos'})
                 }

        } catch (error) {
                var usuarios_cliente=new Array();
                res.json(usuarios_cliente);
            
        }  
}

exports.getAUsuario = async (req, res) => {

        try {
                try{
                        const usuario = await Usuarios.findById(req.params.id); 
                        var usuario_id=new Array();
                        console.log(usuario);
                        usuario_id.push(usuario);                    
                        res.json(usuario_id); 
   
                } catch (error) {
                        var usuarios_id=new Array();
                        res.json(usuarios_id);
                    
                }   

        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        
        }
        }

exports.deleteUsuarios = async (req, res) => {

        try {
        
        let usuarios = await Usuarios.findById(req.params.id);
        
        if(!usuarios){
        res.status(404).json({msg:'Usuario not found, try with other usuario'})
        }
       
        await Usuarios.findOneAndRemove({_id: req.params.id});
        res.json({msg:"Usuario deleted successfully"})

        console.log('Se ha eliminado un usuario')
        
        } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
        }
}

exports.getUsuarios = async (req, res) => {

    try {
    
    const usuarios = await Usuarios.find();
    res.json(usuarios);
    
    } catch (error) {
    console.log(error);
    res.status(500).send('There was an error on the server');
    }
}

exports.rolUsuario = async (req, res) => {

        try {
                       const usuario = await Usuarios.findById(req.params.id); 
               
                       if(!usuario){
                               // var rol2="";
                               // res.json(rol2); 
                                res.status(404).json({msg:'Usuario not found, try with other usuario'})
                       }else{
                                var rol;
                                rol=usuario.rol;  
                                console.log(rol);                
                                res.json(rol);
                       }
                       
                               
                         

        } catch (error) {
        //rol="";
        //res.json(rol); 
        console.log(error);
        res.status(500).send('There was an error on the server');
        
        }


}

