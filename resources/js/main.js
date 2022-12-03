//TODO ------- right click false -----
oncontextmenu = () => { return false }
//TODO ------- Event Fermeture de l'appli ----
function fermetureApplication() {
    socket.emit('disconnect')
    Neutralino.app.exit();
}
Neutralino.events.on("windowClose", fermetureApplication);
//TODO ------- Lancement de l'appli -----
Neutralino.os.execCommand('node server.js', { background: true });
/* Neutralino.window.create('https://www.youtube.com'), {
    icon: '/resources/icons/aboutIcon.png',
    enableInspector: false,
    width: 500,
    height: 300,
    maximizable: false,
    exitProcessOnClose: true,

} */
Neutralino.init();
//TODO ------- Notification d'appli -----

//TODO ------- Lancement du server node -----


/*  */





/* Neutralino.os.showNotification('Hello world', 'It works! Have a nice day');
 Neutralino.os.showNotification('Oops :/', 'Something went wrong', 'ERROR'); */