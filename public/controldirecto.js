

const botonvideolocal=document.getElementById("botonaire");
const botonvideomonitor1=document.getElementById("botonaire1");
const botonvideomonitor2=document.getElementById("botonaire2");
const botonvideomonitor3=document.getElementById("botonaire3");
const botonvideomonitor4=document.getElementById("botonaire4");
const remoteVideo1 = document.getElementById("remoteVideo");
const remoteVideo2 = document.getElementById("remoteVideo2");
const remoteVideo3 = document.getElementById("remoteVideo3");
const remoteVideo4 = document.getElementById("remoteVideo4");
const remoteVideo5 = document.getElementById("remoteVideo5");
const botondenelace = document.getElementById("btn-callenlace");
let medio = document.getElementById("medio").value;

let localStream1;
let localStream2;
let localStream3;
let localStream4;
let localStream5;
let call1;
let call2;
let call3;
let call4;
let currentCall;
let idmovil1;
let idmovil2;
let idmovil3;
let idmovil4;
/////////////////////////////////////////////////////////////////////


/// porgramacion de las acciones del poster del video///////////////

const videoElement = document.getElementById('remoteVideo');
const posterUrl = 'sisenal.jpg';

// Cuando el video termina (se corta o deja de recibir datos)
videoElement.addEventListener('ended', () => {
  videoElement.setAttribute('poster', posterUrl);
});

// Cuando el video se pausa (por cualquier razón)
videoElement.addEventListener('pause', () => {
  videoElement.setAttribute('poster', posterUrl);
});

// Si el video vuelve a reproducirse, eliminamos el poster
videoElement.addEventListener('play', () => {
  videoElement.removeAttribute('poster');
});


///////////////////////////////////////////////////////////////
/////////////boton para llamar a un movil1///////////////////////////////////
const inputRemotePeerId= document.getElementById('remotePeerId');
btncall=document.getElementById('btn-call');

btncall.addEventListener("click", function(){

   	const remotePeerId = inputRemotePeerId.value;
	call1 = peerllama.call(remotePeerId, respuesta);
	call1.on("stream", stream1 => {
        localStream1=stream1;
	
		remoteVideo1.srcObject = localStream1; 
		remoteVideo1.onloadedmetadata = () => remoteVideo1.play();
		
		btncall.style='display: none';
      
        muteBtnA1.style='display : hidden';
        botonaire1.style='display : hidden';
        audio1=true;
        mute1=true;
        document.getElementById('muteBtnA1').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA1').style='width 30px';
        localStream1.getAudioTracks().forEach(track =>{
        track.enabled = false;
        document.getElementById('btn-call').style="display: none";
        });
	});

});
///////////////////////////////////////////////////////////////////////////
//boton para habilitar o deshabilitar Mic movil 1//////////////////////////
muteBtnA1.addEventListener("click", (e) => {
        if (mute) {
            mute=false;
            document.getElementById('muteBtnA1').className='btn btn-danger btn-sm';
            document.getElementById('muteBtnA1').style='width 30px';
             localStream1.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
            mute=true;
           document.getElementById('muteBtnA1').className='btn btn-dark btn-sm';
            document.getElementById('muteBtnA1').style='width 30px';
            localStream1.getAudioTracks().forEach(track =>{
            track.enabled = false;
            })
        }
});
//
/////movil dos////////////////////////////////////////////////////////

/////////////boton para llamar a un movil 2///////////////////////////////////
const inputRemotePeerId2= document.getElementById('remotePeerId2');
btncall2=document.getElementById('btn-call2');

btncall2.addEventListener("click", function(){

   	const remotePeerId2 = inputRemotePeerId2.value;
	call2 = peerllama.call(remotePeerId2, respuesta);
	call2.on("stream", stream2 => {
        localStream2=stream2;
	
		remoteVideo2.srcObject = stream2; 
		remoteVideo2.onloadedmetadata = () => remoteVideo2.play();
		
		btncall2.style='display :none';
        
        muteBtnA2.style='display : hidden';
        botonaire2.style='display : hidden';
        audio2=true;
        mute2=true;
        document.getElementById('muteBtnA2').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA2').style='width 30px';
        localStream2.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
	});

});
///////////////////////////////////////////////////////////////////////////




//boton para habilitar o deshabilitar Mic
muteBtnA2.addEventListener("click", (e) => {
        if (mute) {
             mute=false;
            document.getElementById('muteBtnA2').className='btn btn-danger btn-sm';
            document.getElementById('muteBtnA2').style='width 30px';
             localStream2.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
            mute=true;
           document.getElementById('muteBtnA2').className='btn btn-dark btn-sm';
            document.getElementById('muteBtnA2').style='width 30px';
            localStream2.getAudioTracks().forEach(track =>{
             track.enabled = false;
            })
        }
})
//


///////////////////////////////////////////////

/////movil tres////

/////
/////////////boton para llamar a un movil 3///////////////////////////////////
const inputRemotePeerId3= document.getElementById('remotePeerId3');
btncall3=document.getElementById('btn-call3');

btncall3.addEventListener("click", function(){

   	const remotePeerId3 = inputRemotePeerId3.value;
	const call3 = peerllama.call(remotePeerId3, respuesta);
	call3.on("stream", stream3 => {
        localStream3=stream3;
		const remoteVideo3 = document.getElementById("remoteVideo3");
       
		remoteVideo3.srcObject = stream3; 
		remoteVideo3.onloadedmetadata = () => remoteVideo3.play();
		
		btncall3.style='display :none';
        
        muteBtnA3.style='display : hidden';
        botonaire3.style='display : hidden';
        audio3=true;
        mute3=true;
        document.getElementById('muteBtnA3').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA3').style='width 30px';
        localStream3.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
	});

});
///////////////////////////////////////////////////////////////////////////


//boton para habilitar o deshabilitar Mic
muteBtnA3.addEventListener("click", (e) => {
        if (mute) {
             mute=false;
            document.getElementById('muteBtnA3').className='btn btn-danger btn-sm';
            document.getElementById('muteBtnA3').style='width 30px';
             localStream3.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
            mute=true;
           document.getElementById('muteBtnA3').className='btn btn-dark btn-sm';
            document.getElementById('muteBtnA3').style='width 30px';
            localStream3.getAudioTracks().forEach(track =>{
             track.enabled = false;
            })
        }
})
//

/////////////////////////////////////////////final movil 3 ////////////////////////////
/////////////////////////////////////////movil cuatro //////////////////////



/////////////boton para llamar a un movil 4///////////////////////////////////
const inputRemotePeerId4= document.getElementById('remotePeerId4');
btncall4=document.getElementById('btn-call4');

btncall4.addEventListener("click", function(){

   	const remotePeerId4 = inputRemotePeerId4.value;
	const call4 = peerllama.call(remotePeerId4, respuesta);
	call4.on("stream", stream4 => {
       localStream4=stream4;
     
		remoteVideo4.srcObject = stream4; 
		remoteVideo4.onloadedmetadata = () => remoteVideo4.play();
		
		btncall4.style='display :none';
        
        muteBtnA4.style='display : hidden';
        botonaire4.style='display : hidden';
        //audio4=true;
        //mute4=true;
        document.getElementById('muteBtnA4').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA4').style='width 30px';
        localStream4.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
	});

});
///////////////////////////////////////////////////////////////////////////


//boton para habilitar o deshabilitar Mic
muteBtnA4.addEventListener("click", (e) => {
        if (mute) {
             mute=false;
            document.getElementById('muteBtnA4').className='btn btn-danger btn-sm';
            document.getElementById('muteBtnA4').style='width 30px';
             localStream4.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
           mute=true;
           document.getElementById('muteBtnA4').className='btn btn-dark btn-sm';
           document.getElementById('muteBtnA4').style='width 30px';
           localStream4.getAudioTracks().forEach(track =>{
           track.enabled = false;
            })
        }
})
//
/////////////boton para llamar AL ENLACE///////////////////////////////////
const inputRemotePeerIdenlace= document.getElementById('inputLocalEnlace');
btncallenlace=document.getElementById('btn-callenlace');

btncallenlace.addEventListener("click", function(){
    botondenelace.className='btn btn-danger btn-sm ';
    botonvideolocal.className='btn btn-danger btn-sm';   
   	const remotePeerIdenlace = inputRemotePeerIdenlace.value;
	const call =  peerenlace.call(remotePeerIdenlace, respuesta);
    currentCall = call;
	call.on("stream", stream5 => {
        localStream5=stream5;
	
		remoteVideo5.srcObject = stream5; 
		remoteVideo5.onloadedmetadata = () => remoteVideo5.play();
		
	
        
        muteBtnA5.style='display : hidden';
   
        //mute4=true;
        document.getElementById('muteBtnA5').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA5').style='width 30px';
        localStream5.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });

	});
    peerenlace.on("call", (llamada) => {
        
        llamada.answer(respuesta);
        
     });
    

});
///////////////////////////////////////////////////////////////////////////

//boton para habilitar o deshabilitar Mic
muteBtnA5.addEventListener("click", (e) => {
    if (mute) {
         mute=false;
        document.getElementById('muteBtnA5').className='btn btn-danger btn-sm';
        document.getElementById('muteBtnA5').style='width 30px';
         localStream5.getAudioTracks().forEach(track =>{
         track.enabled = true;
        })
    }else {
       mute=true;
       document.getElementById('muteBtnA5').className='btn btn-dark btn-sm';
       document.getElementById('muteBtnA5').style='width 30px';
       localStream5.getAudioTracks().forEach(track =>{
       track.enabled = false;
        })
    }
})
//

//////////////////////////////////////////////final del movil 4

/////envio de video al aire/////////////////////
/// video local //////
/////envio de video al aire
function cambiarvideovivo(){
    btnenvio()
    botonvideolocal.className='btn btn-danger btn-sm';    
 

   cambio(respuesta,'Central');
    };
    
    /////

function cambiarvideo(){
    btnenvio()
    botonvideomonitor1.className='btn btn-danger btn-sm';  
    cambio(localStream1,'Movil 1');
};

/////
/////envio de video al aire 2
function cambiarvideo2(){
    btnenvio()
    botonvideomonitor2.className='btn btn-danger btn-sm';  
    cambio(localStream2,'Movil 2');     
};

/////
/////envio de video al aire 3
function cambiarvideo3(){
    btnenvio()
    botonvideomonitor3.className='btn btn-danger btn-sm';  
    cambio(localStream3,'Movil 3');   
};

/////
/////envio de video al aire 4
function cambiarvideo4(){
    btnenvio()
    botonvideomonitor4.className='btn btn-danger btn-sm';  
    cambio(localStream4,'Movil 4');   
};


///// Preparacion de los pRevios/////////////////////////////////////////////////
peerprevio.on("open", id2=> {
   //var urlprevio='http://localhost/movilunico/previo.php?idllamar='+id2;
    var urlprevio='https://369streaming.com.ar:3000/previo?idpeer='+id2;
   inputLocalPrevio.value = urlprevio;
  
});

peerprevio.on("call", call => {
    call.answer(respuesta);
    
});

/////////////////////////////// enlace de video/////////////////////////////
videoElement1=document.getElementById('videoaire');
//const streamenlance = videoElement1.captureStream();

peerenlace.on("open", id10=> {
    var urlenlace=id10;
   
   
 });
 
 const socket = io();
 


function cambio(video,movil){
    let videocambio=video;
    const remoteVideoaire = document.getElementById("videoaire");
    data={
        movil:movil,
        activo: 'ON'
    }
    socket.emit('estado', data);
    remoteVideoaire.srcObject = video; 
    remoteVideoaire.onloadedmetadata = () => remoteVideoaire.play();

    pausarFlujoVideo(currentCall, videocambio);
}

function pausarFlujoVideo(llamadaactual, video) {
    const sender = llamadaactual.peerConnection.getSenders().find((s) => s.track.kind === 'video');
    const audioSender = llamadaactual.peerConnection.getSenders().find((s) => s.track.kind === 'audio');

    
    sender.replaceTrack(video.getVideoTracks()[0])
    .then(() => {
        console.log('Fuente de video cambiada con éxito');
      })
      .catch((error) => {
        console.error('Error al cambiar la fuente de video:', error);
      });
      audioSender.replaceTrack(video.getAudioTracks()[0])
      .then(() => {
          console.log('Fuente de audio cambiada con éxito');
      })
      .catch((error) => {
          console.error('Error al cambiar la fuente de audio:', error);
      });
   
    };


  
//boton para habilitar o deshabilitar Mic

//


///////////////////////////////////////////////botones todos en azul///////
function btnenvio(){
    botonvideolocal.className='btn btn-primary btn-sm'; 
    botonvideomonitor1.className='btn btn-primary btn-sm';   
    botonvideomonitor2.className='btn btn-primary btn-sm';  
    botonvideomonitor3.className='btn btn-primary btn-sm';  
    botonvideomonitor4.className='btn btn-primary btn-sm'; 

}
/////////////////////////apaga toddo////////////////////////
function apagatodo(){
mute=true;
/////audio local ///
    if (audio) {
        document.getElementById('muteBtn').className='btn btn-dark btn-sm';
        document.getElementById('muteBtn').style='width 30px';
        localStreamvivo.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
        }
    /////audio 1  ///
    if (audio1) {
        document.getElementById('muteBtnA1').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA1').style='width 30px';
        localStream1.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
    }
    //// audio 2 //////
    if (audio2) {
        document.getElementById('muteBtnA2').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA2').style='width 30px';
        localStream2.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
    }
    //////audio 3 /////
    if (audio3) {
        document.getElementById('muteBtnA3').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA3').style='width 30px';
        localStream3.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
    }
    //////audio 4///////
    if (audio4) {
        document.getElementById('muteBtnA4').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA4').style='width 30px';
        localStream4.getAudioTracks().forEach(track =>{
        track.enabled = false;
        });
    }
}

//////

// Manejar evento de envío de mensaje/////////////////
document.getElementById('chat-form').addEventListener('submit', event => {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  socket.emit('chat message', message);
  messageInput.value = '';
  return false;
});
//////////////////////////////////////////////////////
// Manejar evento de recepción de mensaje
socket.on('chat message', message => {
  const messagesList = document.getElementById('messages');
  const messageItem = document.createElement('li');
  //messageItem.textContent = message;
  messagesList.textContent = message;
});
     // Manejar evento de recepción de mensaje

socket.on('chat message2', message => {
 const messagesList = document.getElementById('remotePeerId');
 messagesList.value=message;
});



// recepcion de los id de conexion 
socket.on('datos', (data) => {
 const movil=data.usuario;
 const mediomovil=data.medio;
 
 const nropeer=data.peer;
 const idconexion=data.usuarioNuevo;
 if (medio == mediomovil) {
    
 
 if (movil=='Movil 1') {
    const nropeermovil1=nropeer;
    const messagesList = document.getElementById('remotePeerId');
    messagesList.value=nropeermovil1;
    document.getElementById('btn-call').style="display: hidden";
    idmovil1=idconexion;
 }
 if (movil=='Movil 2') {
    const nropeermovil2=nropeer;
    const messagesList = document.getElementById('remotePeerId2');
    messagesList.value=nropeermovil2;
    document.getElementById('btn-call2').style="display: hidden";
    idmovil2=idconexion;
 }
 if (movil=='Movil 3') {
    const nropeermovil3=nropeer;
    const messagesList = document.getElementById('remotePeerId3');
    messagesList.value=nropeermovil3;
    document.getElementById('btn-call3').style="display: hidden";
    idmovil3=idconexion;
 }
 if (movil=='Movil 4') {
    const nropeermovil4=nropeer;
    const messagesList = document.getElementById('remotePeerId4');
    messagesList.value=nropeermovil4;
    document.getElementById('btn-call4').style="display: hidden";
    idmovil4=idconexion;
 }

 if (movil=='Enlace') {
    const nropeerenlace=nropeer;
    const messagesList = document.getElementById('inputLocalEnlace');
    messagesList.value=nropeerenlace;
    botondenelace.className='btn btn-success btn-sm ';
    document.getElementById('btn-callenlace').style="display: hidden";
    
 }
}
 
});

function borracelda(id){
    const iddesconectado=id;
    if (idmovil1 == iddesconectado) {
         botonaire1.style.display='none';
    }

    if (idmovil2 == iddesconectado) {
        botonaire2.style.display='none';
    }
    if (idmovil3 == iddesconectado) {
        botonaire3.style.display='none';
    }
    if (idmovil4 == iddesconectado) {
        botonaire4.style.display='none';
    }

};

socket.on('usuarioDesconectado', (data) => {
    const iddesconectado=data.userId;
    console.log(iddesconectado);
    borracelda(iddesconectado);
});

