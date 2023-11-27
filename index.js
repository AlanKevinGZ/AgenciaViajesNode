import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();
const port =process.env.PORT || 3000;

//conectar la base de datos

 db.authenticate()
                .then(()=>console.log('Conexion correcta '))
                .catch(err=>console.log("error en la conexion"))

//habilitar pug
app.set('view engine','pug');

//obtener año actual
app.use((req,res,next)=>{
  let year=new Date();
  res.locals.actualYear=year.getFullYear();
  res.locals.nameSite="Agencia de Viajes"
   next();
})

//AGREGAR body parse para leer los datos de los formularios
app.use(express.urlencoded({ extended: true }));

//definer la carpeta publica
app.use(express.static('public'));

//agregar router, use soporta todo los verbos post,get,etc
app.use('/', router)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})