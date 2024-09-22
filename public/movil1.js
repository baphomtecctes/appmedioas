

/////////////boton para llamar a un movil1///////////////////////////////////
const inputRemotePeerId= document.getElementById('remotePeerId');
btncall=document.getElementById('btn-call');

btncall.addEventListener("click", function(){

   	const remotePeerId = inputRemotePeerId.value;
	const call = peerllama.call(remotePeerId, respuesta);
	call.on("stream", stream => {
        remotestream=stream;
		const remoteVideo = document.getElementById("remoteVideo");
		remoteVideo.srcObject = stream; 
		remoteVideo.onloadedmetadata = () => remoteVideo.play();
		
		btncall.style='display =none';
        localStream1= stream;
        muteBtnA1.style='display = hidden';
        botonaire1.style='display = hidden';
        audio1=true;
        mute1=true;
        document.getElementById('muteBtnA1').className='btn btn-dark btn-sm';
        document.getElementById('muteBtnA1').style='width 30px';
        localStream1.getAudioTracks().forEach(track =>{
        track.enabled = false;
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