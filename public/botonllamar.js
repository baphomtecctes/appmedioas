
const startCallBtn = document.getElementById('start-call');
startCallBtn.addEventListener('click', startCall);

const audioSource = document.getElementById('audio-source');
const videoSource = document.getElementById('video-source');
const botonchat = document.getElementById('botonchat');
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
    selector.style="display:none";
    selector2.style="display:hidden";
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
        .then(localStream0 => {
            respuesta=localStream0;
            //localStreamlocal=localStream0;
            //localVideo.muted=true;
            localVideo.srcObject = localStream0;
            streamenlance=localStream0;
            //remoteVideoaire.srcObject = respuesta; 
            //remoteVideoaire.onloadedmetadata = () => remoteVideoaire.play();  
          

            peer.on("call", call => {
      

                call.on("stream", stream =>{
                localStream = stream;
                muteBtn.style='display = hidden';
                botonaire.style='display = hidden';
                botonchat.style='display = hidden';
                mute=true;
                audio=true;
                document.getElementById('muteBtn').className='btn btn-dark btn-sm';
                document.getElementById('muteBtn').style='width 30px';
                localStream.getAudioTracks().forEach(track =>{
                track.enabled = false;
                });   
               
             
                remoteVideo.srcObject = stream; 
                remoteVideo.onloadedmetadata = () => remoteVideo.play();    
   
                });
            });
        })
        .catch(error => {
            console.error('Error while getting local media stream: ' + error.message);
        });
}

/////

//boton para habilitar o deshabilitar Mic de la local////
muteBtn.addEventListener("click", (e) => {
if (mute) {
     mute=false;
    document.getElementById('muteBtn').className='btn btn-danger btn-sm';
    document.getElementById('muteBtn').style='width 30px';
     respuesta.getAudioTracks().forEach(track =>{
     track.enabled = true;
    })
}else {
    mute=true;
   document.getElementById('muteBtn').className='btn btn-dark btn-sm';
    document.getElementById('muteBtn').style='width 30px';
    respuesta.getAudioTracks().forEach(track =>{
     track.enabled = false;
    })
}
})
//////