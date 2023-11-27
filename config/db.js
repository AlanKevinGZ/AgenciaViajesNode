import  Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//nombre de la bd, usuario,password, configuraciones
const bd = new Sequelize(process.env.DATABASE_URL,{
    define:{
        timestamps:false
    },
    pool:{ //configuracion de sequelize
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
});

export default bd;