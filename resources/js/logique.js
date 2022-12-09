//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
import { infopc, ecrire, reduiretext, grandirtext, cleartext, enregistrertext, heureDynamique } from "./modules/fonctions.js";
const genius = $
const socket = io("http://localhost:13000");
//TODO ----------------------------------------------
//TODO ------- EVENTS SOCKET-----
//TODO ----------------------------------------------
socket.on('connexion', function (data) {
    document.querySelector("#ram").textContent = `${data.ram}`
    document.querySelector("#processeur").textContent = `${data.processeur}`
    document.querySelector("#systeme").textContent = `${data.systeme}`
})
//TODO ----------------------------------------------
//TODO ------- GLOBAL EVENTS & FONCTIONS -----
//TODO ----------------------------------------------
//TODO ------- Event Onload -----
window.onload = () => {
    particlesJS.load('particles', 'json.json')
}
//TODO ------- Event right click false -----
oncontextmenu = () => { return false }

//TODO ------- Animation frame (Heure dynamique) -----
requestAnimationFrame(heureDynamique)

//TODO ----------------------------------------------
//TODO ------- EVENT & FONCTIONS -----
//TODO ----------------------------------------------
//TODO ------- event logo info PC -----
genius.event("#logopc", "mousedown", infopc)

//TODO ------- event logo traitement de texte -----
genius.event("#logoecrire", "mousedown", ecrire)

//TODO ------- event boutton grandir le texte -----
genius.event("#grandirtext", "mousedown", grandirtext)

//TODO ------- event boutton reduire le texte -----
genius.event("#reduiretext", "mousedown", reduiretext)

//TODO ------- event boutton effacer le texte -----
genius.event("#cleartext", "mousedown", cleartext)

//TODO ------- event boutton sauver le texte -----
genius.event("#enregistrertext", "mousedown", enregistrertext)

//TODO ------- event input traitement de texte -----
genius.event("#zonedetext", "input", (e) => {
    genius.textContent(e.target.value, "#text")
})

//TODO ----------------------------------------------
//TODO ------- LOCAL STORAGE -----
//TODO ----------------------------------------------
/*
localStorage.setItem('Thème', 'Claire');
localStorage.getItem('Thème');
localStorage.clear()
console.log(localStorage);
*/

//TODO ------- Fonctions de TESTS -----


