var gira=1;
let localStream;
let localStream2;
let remotestream;
const inputLocalPeerId = document.getElementById("localPeerId");
const inputRemotePeerId = document.getElementById("remotePeerId");
const inputurl= document.getElementById('url');
const inputurl2= document.getElementById('url2');
const btnCall = document.getElementById("btn-call");
const muteBtn = document.getElementById("btnmic");
const muteBtnVid = document.getElementById("btnaur");
const selector= document.getElementById('selector');
const botoncortar= document.getElementById('cerrar');
const botonoff= document.getElementById('botonoff');
const botonon= document.getElementById('botonon');
const movilnro= document.getElementById('movilnro').value;
const botoncambiar= document.getElementById('botoncambiar');
botonon.style.display='none';
let mute=false;
let camera=true;
let numero=0;
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

// Ejemplo de uso
const randomString = generateRandomString(10);
const numeroallamar= movilnro+ randomString;
const peer = new Peer(numeroallamar);
const clave=peer.id;
//////////////////////////
const localVideo = document.getElementById('localVideo');

const startCallBtn = document.getElementById('start-call');
startCallBtn.addEventListener('click', startCall);

const audioSource = document.getElementById('audio-source');
const videoSource = document.getElementById('video-source');
const socket = io();
//////////////////////////

////////////////////////////
// Manejar evento de envío de mensaje
document.getElementById('chat-form').addEventListener('submit', event => {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  socket.emit('chat message', message);
  messageInput.value = '';
  return false;
});

// Manejar evento de recepción de mensaje
socket.on('chat message', message => {
  const messagesList = document.getElementById('messages');
  const messageItem = document.createElement('li');
  messageItem.textContent = message;
 // messagesList.appendChild(messageItem);
 messagesList.textContent = message;
});

function identidad(){
    
    const message = clave;
    const movilnro= document.getElementById('movilnro').value;
    const medio= document.getElementById('medio').value;

    const response={
        usuario: movilnro,
        medio: medio,
        peer: clave,
        usuarioNuevo: socket.id,
        conectado: 'ON'
    };
    socket.emit('chat message2', message);
    socket.emit('datos', response);


}

navigator.mediaDevices.enumerateDevices()
            .then(devices => {
                devices.forEach(device => {
                    if (device.kind === 'audioinput') {
                        const option = document.createElement('option');
                        option.value = device.deviceId;
                        option.text = device.label;
                        audioSource.appendChild(option);
                    } else if (device.kind === 'videoinput') {
                        const option = document.createElement('option');
                        option.value = device.deviceId;
                        option.text = device.label;
                        videoSource.appendChild(option);
                    }
                });
            });



        function startCall() {
            pantallafull();
            identidad();
            const botonllamar=document.getElementById("btn-call");
            
            botoncortar.style="display = hidden";
            selector.style="display:none";
         
            const selectedAudioSource = audioSource.value;
            const selectedVideoSource = videoSource.value;

            const localStreamConstraints = {
                audio: {deviceId: selectedAudioSource,
                        echoCancellation: true,
                        sampleRate: { ideal: 48000 }
             },
                video: {deviceId: selectedVideoSource,
                        width: 1280, 
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
        }

        /////


/// boton para cambio de tamaño de pantalla

function cambiatam(){

   const remoteVideo1 = document.getElementById('remoteVideo');
     if (numero % 2 === 0) {
        remoteVideo1.classList.remove('videoremoto');
        remoteVideo1.classList.add('videopropio');
        numero=numero+1
        botoncambiar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
        </svg>
      `;
      botoncambiar.classList.remove('btn-danger')
      botoncambiar.classList.add('btn-dark')
     } else{
        remoteVideo1.classList.remove('videopropio');
        remoteVideo1.classList.add('videoremoto');
        numero=numero+1
        botoncambiar.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
</svg>
      `;
      botoncambiar.classList.remove('btn-dark')
      botoncambiar.classList.add('btn-danger')
     }
   
   
   
 

}


peer.on("call", call => {
    call.answer(respuesta);
    call.on("stream", stream =>{
    remotestream=stream;
        const remoteVideo = document.getElementById("remoteVideo");
        // remoteVideo.muted = true;
        remoteVideo.srcObject = stream; 
        remoteVideo.onloadedmetadata = () => remoteVideo.play();  
          
    });
});

btnCall.addEventListener("click", function(){
    
    
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



/////////

muteBtn.addEventListener("click", (e) => {
        if (mute) {
             mute=false;
             document.getElementById('btnmic').className='btn btn-danger btn-sm ';
              respuesta.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
            mute=true;
           document.getElementById('btnmic').className='btn btn-dark btn-sm ';
            respuesta.getAudioTracks().forEach(track =>{
             track.enabled = false;
            })
        }
})
////////////////////////


muteBtnVid.addEventListener("click", (e) => {
        if (mute) {
             mute=false;
             document.getElementById('btnaur').className='btn btn-danger btn-sm ';
            remotestream.getAudioTracks().forEach(track =>{
             track.enabled = true;
            })
        }else {
            mute=true;
           document.getElementById('btnaur').className='btn btn-dark btn-sm ';
            remotestream.getAudioTracks().forEach(track =>{
             track.enabled = false;
            })
        }
})
////////////////////////






//boton para habilitar o deshabilitar camara
cameraoff.addEventListener("click", (e) => {
            if (camera) {
                 document.getElementById('cameraoff').className='btn btn-dark btn-sm';
                camera=false;
                respuesta.getVideoTracks().forEach(track =>{
                    track.enabled=false;
                })

            } else {
                 document.getElementById('cameraoff').className='btn btn-danger btn-sm';
                camera=true;
                respuesta.getVideoTracks().forEach(track =>{
                    track.enabled=true;
                  
                })                    
            }
})

//////



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


function cerrar() {
   // Recarga la página forzando la obtención de recursos desde el servidor
location.reload(true);

}

socket.on('estado', (data) => {
    const estado=data.activo;
    const movil=data.movil;
    console.log(movil,estado,movilnro);
    if (movil == movilnro) {
        botonoff.style.display='none';
        botonon.style.display='block';
    }else{
        botonoff.style.display='block';
        botonon.style.display='none';
    }

});
   
