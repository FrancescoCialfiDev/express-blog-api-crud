// STEP 1 PRIMA ROTTA
// - Importiamo nuovamente il modulo express sul nuovo file js.
const express = require("express");
// - Utilizziamo il metodo express per gestire le rotte in modo modulare.
const commentsRouter = express.Router(); // Oggetto express per creare un instanza routing.
// - Importiamo le funzioni di controllo dal file commentsController.js:
const { index, show, store, update, modify, destroy } = require("../controllers/commentsController")

// STEP 2 
// - Creiamo le richieste http con i vari metodi (GET,POST,PUT,PATCH,DELETE)

// READ - (INDEX)
commentsRouter.get('/', index); // Richiesta get generica

// READ - (SHOW)
commentsRouter.get('/:id', show); // Richiesta get specifica

// CREATE - (STORE)
commentsRouter.post('/', store); // Creazione di un nuovo alimento

// UPDATE - (UPDATE)
commentsRouter.put('/:id', update); // Aggiornamento completo di un alimento

// PATCH - (MODIFY)
commentsRouter.patch('/:id', modify); // Aggiornamento parziale di un alimento

// DELETE - (DESTROY)
commentsRouter.delete('/:id', destroy); // Eliminazione di un alimento

// Esportazione del modulo di routing
module.exports = commentsRouter;