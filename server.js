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

// - Garantiamo l'utilizzo degli assets nella cartella public
app.use(express.static('public')); // Servire file dalla cartella "public".

// Utilizziamo il middleware per permettere la lettura dei file json inviati.
app.use(express.json())

// Importiamo i file di routing:
const routingFoods = require("./routers/foods.js")
app.use("/foods", routingFoods) // Usiamo il metodo use per indicare l'utilizzo del modulo del file di routing.
const commentsRouter = require("./routers/comments.js");
app.use("/comments", commentsRouter) // Usiamo il metodo use per indicare l'utilizzo del modulo del file di routing.

app.get("*", (req, res) => {
    res.status(404).send("Non è stato possibile trovare la pagina");
})

// Mettiamo in ascolto la nostra variabile app che contiene il server, sulla porta 3000.
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
})


