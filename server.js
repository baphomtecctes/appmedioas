// Importar paquetes
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
var bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https');

const bcrypt = require('bcryptjs');

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env'});	

const session = require('express-session');



// Configurar servidor Express
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
////////////////////////////

/// conexion a la base de datos
const connection = require('./database/dbconect');
const puerto = 3000;
//////https.createServer({
//  cert: fs.readFileSync('miservidor.crt') ,
//  key: fs.readFileSync('miservidor.key')
//},app).listen(puerto, function(){
//  console.log("servidor corrienteo en el puerto 443");
//});

server.listen(puerto, () => {
  console.log('Servidor en funcionamiento en el puerto', puerto);
});
// Configurar Socket.IO
const io = socketIO(server);

// Ruta para servir archivos estáticos
app.use(express.static(__dirname + '/public'));
// rutas


//
app.get('/', (req, res) => {
  const movil = 'login';
  res.render('login', { movil: movil });
});
//
//
app.get('/login', (req, res) => {
  const movil = 'login';
  res.render('login', { movil: movil });
});

////
app.get('/control', (req, res)=> {
	if (req.session.loggedin) {
    const movil = 'Central';
    
    const medio= req.session.medio;
	  res.render('master',{
	  loginadmin: true,
      movil: movil,
      medio: medio,
      login: true,
			name: req.session.name			
		});		
	} else {
		res.render('login',{
			loginadmin:false,
      login: true,
			name:'Debe iniciar sesión'		
		});				
	}
	res.end();
});
app.get('/celular', (req, res) => {
  const movil = 'Celular';
  res.render('celular', { movil: movil });
});
///


///////////////
app.get('/movil', (req, res) => {
  const medio= req.session.medio;
  const dispositivo= req.session.dispositivo;
  const movil = 'Movil '+ dispositivo;
  res.render('movil', { 
	medio: medio,
	dispositivo:dispositivo,
    movil: movil });
});



app.get('/previo', (req, res) => {
  const peer =req.query.idpeer;
  console.log(peer);
  res.render('previo', {peer:  peer });
});



/////enlace////
app.get('/enlace', (req, res) => {
  const medio= req.session.medio;
  const movil = 'Enlace';	
  res.render('enlace', { 
	medio:medio,
	movil: movil });
});
/////////////////////////////////////////
///// envio a la base de datos ///////////
app.post('/register', async (req, res)=>{
	const user = req.body.user;
	const name = req.body.name;
    const rol = req.body.rol;
	const funcion = req.body.funcion;
	const dispositivo = req.body.dispositivo;
	const pass = req.body.pass;

	let passwordHash = await bcrypt.hash(pass, 8);
    connection.query('INSERT INTO node_users SET ?',{user:user, name:name, rol:rol,funcion:funcion, dispositivo:dispositivo, pass:passwordHash}, async (error, results)=>{
        if(error){
            console.log(error);
        }else{            
			res.render('register', {
				login: true,
				name: req.session.name,
				alert: true,
				alertTitle: "Registration",
				alertMessage: "¡Successful Registration!",
				alertIcon:'success',
				showConfirmButton: false,
				timer: 1500,
				ruta: 'admin'
			});
            //res.redirect('/');         
        }
	});
})
/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////// final del registro /////////////////
app.get('/register', (req, res)=> {
	if (req.session.loggedin) {
		res.render('register',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('register',{
			login:false,
			name:'Debe iniciar sesión',			
		});				
	}
	res.end();
});
///////////
/////login
//11 - Metodo para la autenticacion
app.post('/auth', async (req, res)=> {
	const user = req.body.user;
	const pass = req.body.pass;    
    let passwordHash =  bcrypt.hash(pass, 8);
	if (user && pass) {
		connection.query('SELECT * FROM node_users WHERE user = ?', [user], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcrypt.compare(pass, results[0].pass)) ) {    
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "USUARIO y/o PASSWORD incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: '/'    
                    });
				
				//Mensaje simple y poco vistoso
                //res.send('Incorrect Username and/or Password!');				
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
                req.session.medio= results[0].rol;
				req.session.funcion= results[0].funcion;
				req.session.dispositivo= results[0].dispositivo;
				if (req.session.funcion == 'Central') {
					 rutas= 'Control';
				};
				if (req.session.funcion == 'Movil') {
					 rutas= 'Movil';
				};
				if (req.session.funcion == 'Mochila') {
					 rutas= 'Mochila';
				};
				if (req.session.funcion == 'Enlace') {
					rutas= 'Enlace';
			   };
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: rutas
				});        			
			}			
			res.end();
		});
	} else {	
		res.send('Please enter user and Password!');
		res.end();
	}
});

// Escuchar conexiones de Socket.IO
io.on('connection', socket => {
  console.log('Nuevo usuario conectado: '+socket.id);
 
  // Manejar evento de mensaje enviado
  socket.on('chat message', message => {
    console.log('Mensaje recibido:', message);
    io.emit('chat message', message); // Enviar el mensaje a todos los clientes conectados
  });
  socket.on('chat message2', message => {
    console.log('Mensaje recibido:', message);
    io.emit('chat message2', message); // Enviar el mensaje a todos los clientes conectados
  });
  ////////////////////////////////////////////
  socket.on('datos', (data) => {
    console.log(data);
    io.emit('datos', data);
  });
  socket.on('estado', (data) => {
    console.log(data);
    io.emit('estado', data);
  });

  // Manejar evento de desconexión de usuario
 // socket.on('disconnect', () => {
 //   console.log('Usuario desconectado:'+socket.id);
 // });
 socket.on('disconnect', () => {
  console.log('Usuario Desconectado:'+socket.id);
  io.emit('usuarioDesconectado', { userId: socket.id });
});

});


// Iniciar el servidor

