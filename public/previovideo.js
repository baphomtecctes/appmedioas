const btnCall = document.getElementById("btn-call");


const peer = new Peer(null, {
  config: {
      iceServers: [
          { url: 'stun:stun.l.google.com:19302' }, // Servidor STUN público de Google
      ]
  },
  debug: 2 // Nivel de debug para ver lo que está pasando en la consola
});
const inputRemotePeerId = document.getElementById("remotePeerId");
const localVideo = document.getElementById('localVideo');
const socket = io();

const localStreamConstraints = {
  audio: {    echoCancellation: true,
              sampleRate: { ideal: 48000 }
   },
      video: {width: 1280, 
              height: 720, 
              frameRate: { max: 30 }
  }
  };
navigator.mediaDevices.getUserMedia(localStreamConstraints)
.then(localStream => {
    respuesta=localStream;
    localVideo.muted=true;
    localVideo.srcObject = localStream;
})
.catch(error => {
    console.error('Error while getting local media stream: ' + error.message);
});
///////////////////////////////////////////


//////boton para realizar el llamado//////
btnCall.addEventListener("click", function(){
    
    pantallafull();
	const remotePeerId = inputRemotePeerId.value.trim();
	const call = peer.call(remotePeerId, respuesta);
	call.on("stream", stream => {
        remotestream=stream;
		const remoteVideo = document.getElementById("remoteVideo");
		remoteVideo.srcObject = stream; 
		remoteVideo.onloadedmetadata = () => remoteVideo.play();
		document.getElementById('btn-call').className='btn btn-danger';
		document.getElementById('btn-call').textContent='LIVE';
	});

});
socket.on('chat message', message => {
    const messagesList = document.getElementById('messages');
    const messageItem = document.createElement('li');
    messageItem.textContent = message;
   // messagesList.appendChild(messageItem);
   messagesList.textContent = message;
  });

  function pantallafull(){
    // Obtén el elemento del documento que deseas mostrar en pantalla completa
    var elemento = document.getElementById("pantallatotal");
    
    // Verifica si la API Fullscreen es compatible con el navegador
    if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
    } else if (elemento.mozRequestFullScreen) { // Para Firefox
      elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) { // Para Chrome, Safari y Opera
      elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) { // Para Internet Explorer y Microsoft Edge
      elemento.msRequestFullscreen();
    }
    
    }
    