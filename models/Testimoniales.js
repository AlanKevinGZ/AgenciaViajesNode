import  Sequelize from 'sequelize';
import db from '../config/db.js';

//tabla de la bd
export const Testimoniales=db.define('testimoniales',{
    nombre:{
        type:Sequelize.STRING 
    },
    correo:{
        type:Sequelize.STRING 
    },
    mensaje:{
        type:Sequelize.STRING 
    },


});
