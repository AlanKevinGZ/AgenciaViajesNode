import {Viaje} from '../models/Viajes.js'
import {Testimoniales} from '../models/Testimoniales.js'
const paginaInicio= async(req, res) => { //req: lo que se envia, res: lo que nos responde
  //consultar 3 viajes
  let promiseDB=[];
  promiseDB.push( Viaje.findAll({limit:3}))
  promiseDB.push( Testimoniales.findAll({limit:3}))
  let resultado=await Promise.all(promiseDB);
try {
  let viajes=await Viaje.findAll({limit:3});
  let testimoniales=await Testimoniales.findAll({limit:3});
  res.render('inicio',{
    pagina:'Inicio',
    clase:'home',
    res:resultado[0],
    testimonios:resultado[1]
  })//render imprime una vista renderisada de html 
} catch (error) {
}
    
}

const paginaNosotros= (req, res) => { 
    res.render('nosotros',{
        pagina:'Nosotros'
      }) 
}

const paginaViajes= async (req, res) => { 

  //consultar a la base
  let viajes=await Viaje.findAll() //findAll trae todos los resultados de la tabla
  console.log(viajes);
  
    res.render('viajes',{
        pagina:'Viajes',
        res:viajes
      }) 
}

//muestra viaje por slug
const paginaViajesSlug= async (req, res) => { 
  let slug  = req.params.slug;
  try {
    const viajeid = await Viaje.findOne({ where: { slug } });
    if (!viajeid){
      res.render('inicio',{
        pagina:'Inicio'
      })
  
      return
    }
    res.render('viajesSlug',{
      pagina:viajeid.titulo,
      viaje:viajeid
    }) 
  } catch (error) {
    console.log(error);
  }

   
}

const paginaTestimoniales= async(req, res) => { 
    try {
      let testimoniales=await Testimoniales.findAll()
      res.render('testimoniales',{
        pagina:'Testimonios',
        testimonios:testimoniales
      }) 
    } catch (error) {
      
    }
    
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaViajesSlug,
    paginaTestimoniales,
}