require('dotenv').config();

const mySql = require('mysql2');
const connection = mySql.createConnection(
    {
        
        /*host : 'localhost',
        user: 'root',
        password: '070817',
        database: 'grupo19_b'*/
        

        host : process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });




    connection.connect((err) =>
    {
        if(err)
        {
            console.error("Error conectando a la base de datos",err);
            return;
        }




        console.log("Conectado a la base de datos");




        connection.query('CREATE DATABASE IF NOT EXISTS grupo19_b', (err,results) =>
        {
            if(err)
            {
                console.log("Error creando la base de datos");
                return;
            }




            console.log("Base de datos asegurada");




            connection.changeUser({database : 'grupo19_b'}, (err)=>
            {
                if(err)
                {
                    console.error("Error al cambiar",err);
                    return;
                }






            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS clientes_2 (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    apellido VARCHAR(100) NOT NULL,
                    mail VARCHAR(100) NOT NULL,
                    cel NUMERIC(10) NOT NULL
                );            
            `;




            connection.query(createTableQuery,(err,results) =>
            {
                if(err)
                {
                    console.log("Error creando la tabla: " , err);
                    return;
                }




                console.log("Tabla asegurada");
            });
        });




    });




});




module.exports = connection;
