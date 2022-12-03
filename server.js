//TODO ----------------------------------------------
//TODO ------- Require and import -----
//TODO ----------------------------------------------
const express = require("express")
const http = require('http');
const { Genius } = require("@rom13/genius");
const genius = new Genius();

const app = express()
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: ["http://localhost:12000"],
        methods: ["GET", "POST"]
    }
})
//TODO ----------------------------------------------
//TODO ------- App use -----
//TODO ----------------------------------------------
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static("ressources"))




//TODO ----------------------------------------------
//TODO ------- lancement serveur -----
//TODO ----------------------------------------------
server.listen(process.env.PORT || 13000,
    function initialisation() {
        console.log(`Serveur en marche sur le port 13000 le ${genius.date()} à ${genius.heure()}`)
    })

//TODO ----------------------------------------------
//TODO ------- Requêtes classiques -----
//TODO ----------------------------------------------
app.get("/", (req, res) => {

    /*  res.sendFile('public/svelte/my-svelte-project/public/index.html', {
         root: __dirname
     }) */
    res.send("Je suis le serveur de l'appli")
})
let matos = { ram: genius.matos('ram'), processeur: genius.matos('processeur'), systeme: genius.matos('systeme') }

//TODO ----------------------------------------------
//TODO ------- Socket io -----
//TODO ----------------------------------------------

io.on('connect', (socket) => {

    //TODO ------- EVENT CONNEXION -----

    console.log(socket.id + ' est connecté');
    let rapport = 'socket ! '
    io.emit('connexion', matos)

    //TODO ------- EVENT DECONNEXION DE L'APPLI-----

    socket.on('disconnect', function (data) {
        process.exit()
    })
})