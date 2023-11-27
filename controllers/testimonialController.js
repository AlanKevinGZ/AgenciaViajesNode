
import {Testimoniales} from '../models/Testimoniales.js'
const guardarTestimoniales = async(req, res)  => {  
   
    let errores=[];
   if(req.body.nombre.trim()===""){
    errores.push({mensaje:"El nombre esta vacio"})
   }

   if(req.body.correo.trim()===""){
    errores.push({mensaje:"El correo esta vacio"})
   }

   if(req.body.mensaje.trim()===""){
    errores.push({mensaje:"El mensaje esta vacio"})
   }
   if (errores.length > 0) {
    // mostrar vista con errores
    let testimoniales=await Testimoniales.findAll();
    res.render('testimoniales', {
        pagina: 'Testimonios',
        error: errores,
        nombre:req.body.nombre,
        correo:req.body.correo,
        mensaje:req.body.mensaje,
        testimonios:testimoniales
    });
    return;
   }
   //alamcenar datos
   try {
    await Testimoniales.create({
        nombre:req.body.nombre,
        correo:req.body.correo,
        mensaje:req.body.mensaje
    })

    res.redirect('/testimoniales');

   } catch (error) {
    
   }
   
}

export {
    guardarTestimoniales
}