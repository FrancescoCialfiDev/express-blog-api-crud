"use strict"; // Usiamo use strict poichè lavoriamo con file commonJS, quindi non impostato come valore di default.
console.clear(); // Effettuiamo un clear della console da eventuali errori e righe di codice iniziali

// STEP 1 ----Creiamo-progetto-Node----:
// - Inizializziamo un progetto node con il comando npm init -y ( shortcut per evitare la prassi di configurazione del progetto ):
// - Utilizziamo un alias script nel file package.json e applichiamo il controllo --watch per il live refresh della console.
// - Installiamo il modulo express tramite la console con il comando npm install express.
// - Creo un file .gitignore per omettere l'esportazione del contenuto dei moduli express.

///////////////////////////////////////////////

// STEP 2 ----Creazione-del-server-con-express----:

// - Creiamo una costante e importiamo il modulo express.
const express = require("express");
// - Creiamo una costante app e assegniamo il valore dell'applicazione server.
const app = express();
// - Creiamo una costante e la inizializziamo al valore della porta:
const PORT = 3000;
// - Importiamo l'array di oggetti dal file db.js
const objectsFoods = require("./db.js");
// - Garantiamo l'utilizzo degli asset
app.use(express.static('public')); // Servire file dalla cartella "public".

// Creaimo una rotta semplice per inviare il file html al client.
// app.get("/", (req, res) => {
//     res.sendFile(`${__dirname}/public/index.html`)
// });

// POSSIAMO OMETTERE IL CODICE POICHE GESTITO SU ROOUTING DI FOODS.JS
// Creaimo una rotta alternativa per inviare l'oggetto creato in formato json.
// app.get("/foods", (req, res) => {
//     const risposta = {
//         conteggio: objectsFoods.length,
//         foods: objectsFoods
//     }
//     res.json(risposta)
// })

// Importiamo il file foods.js all'interno della cartella routers.
const roouting = require("./routers/foods.js")
app.use("/foods", roouting) // Usiamo il metodo use per indicare l'utilizzo del modulo del file di routing.
// Importiamo il file colors.js all'interno della cartella routers.
const colors = require("./routers/colors.js")
app.use("/colors", colors)


// - In caso non venga trovato nessun percorso viene inviato un errore 404
app.get("*", (req, res) => {
    res.status(404).send("Non è stato possibile trovare la pagina")

})
// Mettiamo in ascolto la nostra variabile app che contiene il server, sulla porta 3000.
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
})


