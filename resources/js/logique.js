//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
const genius = $
let heure;
let heuretext = document.querySelector("#heure")
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
//TODO ------- EVENTS -----
//TODO ----------------------------------------------

//TODO ------- Event Onload -----
window.onload = () => {
    particlesJS.load('particles', 'json.json')
}
genius.event("#zonedetext", "keyup", (e) => {
    genius.textContent(e.target.value, "#text")
})
//TODO ----------------------------------------------
//TODO ------- FONCTIONS -----
//TODO ----------------------------------------------

//TODO ------- Fonction Info du PC -----
function infopc() {
    document.querySelector("#infopc").classList.toggle("infopccacher");
}

function cleartext() {
    genius.textContent('', "#text")
    document.querySelector("#zonedetext").value = ''

}


function fonctionheure() {
    console.log("t'as cliqué sur le boutton ! ");
    Neutralino.os.showNotification('Le logiciel est prêt', 'It works! Have a nice day');

}
setInterval(() => {
    heure = genius.heure()
    heuretext.textContent = heure

}, 1000);
function telecharger() {
    document.location = "http://localhost:12000/test.html"
    /*  document.location = "https://drive.google.com/u/0/uc?id=10VrjYVZ7pcoJDVOdyTkbn_tU6WMI9O10&export=download" */
}
function capture(params) {
    console.log('hihi');
}
function nouveaudossier(params) {
    console.log('creation de nouveau dossier');
    Neutralino.filesystem.createDirectory('./NOUVEAU-DOSSIER').then(() => {
        Neutralino.filesystem.writeFile('./NOUVEAU-DOSSIER/myFile.txt', 'yoyoyoyoyoyoyo');
        console.log('terminé ! ');
    });

}





