const inputLocalPeerId = document.getElementById("localPeerId");
const inputLocalPeerId2 = document.getElementById("localPeerId2");
const inputLocalPeerId3 = document.getElementById("localPeerId3");
const inputLocalPeerId4 = document.getElementById("localPeerId4");
const inputLocalPrevio = document.getElementById("localprevio");
const inputLocalEnlace = document.getElementById("localenlace");
const remoteVideoaire = document.getElementById("videoaire");
let enlacerespuesta;
let localStreamlocal;
let streamenlance;

const localVideo = document.getElementById('local-video');
//const remoteVideo = document.getElementById('remote-video');
const selector= document.getElementById('selector');
const selector2= document.getElementById('seccionvideo');
const muteBtn = document.getElementById("muteBtn");
const muteBtnA1 = document.getElementById("muteBtnA1");
const muteBtnA2 = document.getElementById("muteBtnA2");
const muteBtnA3 = document.getElementById("muteBtnA3");
const muteBtnA4 = document.getElementById("muteBtnA4");
const muteBtnA5 = document.getElementById("muteBtnA5");
const botonaire = document.getElementById("botonaire");
const botonaire1 = document.getElementById("botonaire1");
const botonaire2 = document.getElementById("botonaire2");
const botonaire3 = document.getElementById("botonaire3");
const botonaire4 = document.getElementById("botonaire4");
const enlaceVideoaire = document.getElementById("previoenlace");
let mute=false;
let respuesta;

let localStream;
let audio;
let audio1;
let audio2;
let audio3;
let audio4;

const peer = new Peer(null, {
    config: {
        iceServers: [
            { url: 'stun:stun.l.google.com:19302' }, // Servidor STUN público de Google
        ]
    },
    debug: 2 // Nivel de debug para ver lo que está pasando en la consola
});
var peerllama =new Peer(null, {
    config: {
        iceServers: [
            { url: 'stun:stun.l.google.com:19302' }, // Servidor STUN público de Google
        ]
    },
    debug: 2 // Nivel de debug para ver lo que está pasando en la consola
});
//var peer2 = new Peer();
//var peer3 = new Peer();
//var peer4 = new Peer();
var peerprevio = new Peer(null, {
    config: {
        iceServers: [
            { url: 'stun:stun.l.google.com:19302' }, // Servidor STUN público de Google
        ]
    },
    debug: 2 // Nivel de debug para ver lo que está pasando en la consola
});
var peerenlace = new Peer(null, {
    config: {
        iceServers: [
            { url: 'stun:stun.l.google.com:19302' }, // Servidor STUN público de Google
        ]
    },
    debug: 2 // Nivel de debug para ver lo que está pasando en la consola
});
///////