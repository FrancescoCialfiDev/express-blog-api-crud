// STEP 1 
// - Importiamo nuovamente il modulo express sul nuovo file js.
const express = require("express");
// - Utilizziamo il metodo express per gestire le rotte in modo modulare.
const colorsRouter = express.Router();

// STEP 2 
// - Creiamo le richieste http con i vari metodi (GET,POST,PUT,PATCH,DELETE)

// READ - (INDEX)
colorsRouter.get('/', (req, res) => res.send('Lista intera alimenti')); // Richiesta get generica 

// READ - (SHOW)
colorsRouter.get('/:id', (req, res) => res.send(`Lista singolo alimento`)); // Richiesta get specifica

// CREATE - (STORE)
colorsRouter.post('/', (req, res) => res.send('Creazione nuovo alimento')); // Creazione di un nuovo alimento

// UPDATE - (UPDATE)
colorsRouter.put('/:id', (req, res) => res.send(`Aggiornamento alimento`)); // Aggiornamento completo di un alimento

// PATCH - (MODIFY)
colorsRouter.patch('/:id', (req, res) => res.send(`Aggiornamento parziale alimento`)); // Aggiornamento parziale di un alimento

// DELETE - (DESTROY)
colorsRouter.delete('/:id', (req, res) => res.send(`Eliminazione alimento`)); // Eliminazione di un alimento

// Esportazione del modulo
module.exports = colorsRouter;