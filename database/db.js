//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require('mysql2');
const connection = mysql.createConnection({
    //Con variables de entorno
    host     : '179.43.125.56',
    user     : 'baphomte_app',
    password : 'LAhienas123',
    database : 'baphomte_app'
});

connection.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = connection;