import express from 'express'
import {paginaInicio,paginaNosotros,paginaViajes,paginaViajesSlug,paginaTestimoniales} from '../controllers/paginaController.js'
import {guardarTestimoniales} from '../controllers/testimonialController.js'

const router = express.Router();

//controlador 
router.get('/',paginaInicio);

router.get('/nosotros',paginaNosotros );

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaViajesSlug);

router.get('/testimoniales',paginaTestimoniales);
  
router.post('/testimoniales',guardarTestimoniales);
  
  
export default router;


