

//TODO ------- Event Fermeture de l'appli ----
function fermetureApplication() {
    socket.emit('disconnect')
    Neutralino.app.exit();
}
Neutralino.events.on("windowClose", fermetureApplication);

//TODO ------- Lancement de l'appli -----

//TODO ------- Ouvrir une nouvelle fenetre -----
/* Neutralino.window.create('https://www.youtube.com'), {
    icon: '/resources/icons/aboutIcon.png',
    enableInspector: false,
    width: 500,
    height: 300,
    maximizable: false,
    exitProcessOnClose: true,

} */
//TODO ------- Fonction afficher notification -----
/* Neutralino.os.showNotification('Hello world', 'It works! Have a nice day'); */
//TODO ------- Lancement du server node -----
Neutralino.os.execCommand('node server.js', { background: true });
Neutralino.init();




