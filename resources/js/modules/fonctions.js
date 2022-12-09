//TODO ------- Variables -----
let fontsizetext = 1.5
const genius = $


//TODO ------- Fonction afficher Info du PC -----
export function infopc() {
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
export function ecrire() {

    if (document.querySelector("#infopc").className = "cacher") {

    }
    else {
        document.querySelector("#infopc").className = "cacher"
    }
    document.querySelector("#blocktext").classList.toggle("cacher");
    document.querySelector("#zonedetext").classList.toggle("cacher");
}
//TODO ------- Fonction effacer le texte -----
export function cleartext() {
    genius.textContent('', "#text")
    document.querySelector("#zonedetext").value = ''

}
//TODO ------- Fonction grandir le texte -----
export function grandirtext() {
    fontsizetext += 0.2;
    document.querySelector("#text").style.fontSize = `${fontsizetext}vw`

}
//TODO ------- Fonction reduire le texte -----
export function reduiretext() {
    fontsizetext -= 0.2;
    document.querySelector("#text").style.fontSize = `${fontsizetext}vw`;
}
//TODO ------- Fonction enregistrer text localstorage -----
export function enregistrertext() {
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
//TODO ------- Fonction creer un fichier texte -----
export function creerfichiertext() {
    let text = document.querySelector("#zonedetext").value
    /*  Neutralino.filesystem.writeFile('./Mon Texte.txt', text); */
}
//TODO ------- Fonction heure dynamique -----
export function heureDynamique() {
    genius.textContent(genius.heure(), '#heure')
    requestAnimationFrame(heureDynamique)
}
//TODO ------- Fonction telechargement -----
export function telecharger() {
    /* document.location = "http://localhost:12000/test.html" */
    /*  document.location = "https://drive.google.com/u/0/uc?id=10VrjYVZ7pcoJDVOdyTkbn_tU6WMI9O10&export=download" */
}
//TODO ------- Fonction creer nouveau dossier -----
export function nouveaudossier(params) {
    console.log('creation de nouveau dossier');
    Neutralino.filesystem.createDirectory('./NOUVEAU-DOSSIER').then(() => {
        Neutralino.filesystem.writeFile('./NOUVEAU-DOSSIER/myFile.txt', 'yoyoyoyoyoyoyo');
        console.log('terminé ! ');
    });

}