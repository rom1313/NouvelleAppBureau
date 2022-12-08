//TODO ----------------------------------------------
//TODO ------- IMPORTS ET DECLARATION -----
//TODO ----------------------------------------------
const genius = $
let heure;
let heuretext = document.querySelector("#heure")
const socket = io("http://localhost:13000");
let fontsizetext = 1.5
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
genius.event("#zonedetext", "input", (e) => {
 
    genius.textContent(e.target.value, "#text")
})
//TODO ----------------------------------------------
//TODO ------- FONCTIONS -----
//TODO ----------------------------------------------

//TODO ------- Fonction afficher Info du PC -----
function infopc() {
    if ((document.querySelector("#blocktext").className = "cacher")
        && (document.querySelector("#zonedetext").className = "cacher")) {

    }
    else {
        document.querySelector("#zonedetext").className = "cacher"
        document.querySelector("#blocktext").className = "cacher"

    }
    document.querySelector("#infopc").classList.toggle("cacher");
}
//TODO ------- Fonction afficher traitement de texte -----
function ecrire() {

    if (document.querySelector("#infopc").className = "cacher") {

    }
    else {
        document.querySelector("#infopc").className = "cacher"
    }
    document.querySelector("#blocktext").classList.toggle("cacher");
    document.querySelector("#zonedetext").classList.toggle("cacher");
}
//TODO ------- Fonction effacer le texte -----
function cleartext() {
    genius.textContent('', "#text")
    document.querySelector("#zonedetext").value = ''

}
//TODO ------- Fonction grandir le texte -----
function grandirtext() {
    fontsizetext += 0.2;
    document.querySelector("#text").style.fontSize = `${fontsizetext}vw`

}
//TODO ------- Fonction reduire le texte -----
function reduiretext() {
    fontsizetext -= 0.2;
    document.querySelector("#text").style.fontSize = `${fontsizetext}vw`;
}
//TODO ------- Fonction creer un fichier texte -----
function creerfichiertext() {

    let text = document.querySelector("#zonedetext").value
    /*  Neutralino.filesystem.writeFile('./Mon Texte.txt', text); */
}
//TODO ------- Fonction enregistrer text localstorage -----
function enregistrertext() {
    console.log(localStorage);
    localStorage.setItem('Text', `hihihih`);
    localStorage.setItem('Text2', `yo`);
    let cookies = localStorage
    let tabcookie = []
    for (const [key, value] of Object.entries(cookies)) {
        console.log(`${key}: ${value}`);
        tabcookie.push([key, value])
    }
    console.log(tabcookie);
    tabcookie.forEach(element => {
       let nom = document.createElement("p")
       nom.textContent = element[0]
       document.querySelector("#textenregistrer").appendChild(nom) 
       console.log(element[0]);
    });
    console.log(document.querySelector("#textenregistrer"));

    /*   console.log(tabcookie.filter(element => element.nom = 'Thème')); */

}

/* localStorage.setItem('Thème', 'Claire'); */
localStorage.clear()
//TODO ------- Fonction heure dynamique -----

//on créer la fonction 
function heureDynamique() {
    genius.textContent(genius.heure(), '#heure')
    requestAnimationFrame(heureDynamique)
}

//on appel "l'animation"
requestAnimationFrame(heureDynamique)
//TODO ------- Fonction telechargement -----
function telecharger() {
    document.location = "http://localhost:12000/test.html"
    /*  document.location = "https://drive.google.com/u/0/uc?id=10VrjYVZ7pcoJDVOdyTkbn_tU6WMI9O10&export=download" */
}


function capture(params) {
    console.log('hihi');
}
//TODO ------- Fonction creer nouveau dossier -----
function nouveaudossier(params) {
    console.log('creation de nouveau dossier');
    Neutralino.filesystem.createDirectory('./NOUVEAU-DOSSIER').then(() => {
        Neutralino.filesystem.writeFile('./NOUVEAU-DOSSIER/myFile.txt', 'yoyoyoyoyoyoyo');
        console.log('terminé ! ');
    });

}

//TODO ------- Fonction TESTS -----
function test() {
    console.log("rfff");
}


