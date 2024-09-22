
const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host     : '179.43.125.56',
  user     : 'baphomte_app',
  password : 'LAhienas123',
  database : 'baphomte_app'
});