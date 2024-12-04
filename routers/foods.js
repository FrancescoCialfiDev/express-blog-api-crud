// STEP 1 
// - Importiamo nuovamente il modulo express sul nuovo file js.
const express = require("express");
// - Utilizziamo il metodo express per gestire le rotte in modo modulare.
const foodsRouter = express.Router();
// - Importo l'array di oggetti
const objectsFoods = require("../db.js");

// STEP 2 
// - Creiamo le richieste http con i vari metodi (GET,POST,PUT,PATCH,DELETE)

// READ - (INDEX)
foodsRouter.get('/', (req, res) => {
    const risposta = {
        conteggio: objectsFoods.length,
        foods: objectsFoods
    }
    res.json(risposta)
});

// READ - (SHOW)
foodsRouter.get('/:id', (req, res) => {
    const parametro = parseInt(req.params.id);
    console.log(parametro);

    const filtredArray = objectsFoods.find(element => element.id === parametro)
    res.json(filtredArray)


}); // Richiesta get specifica

// CREATE - (STORE)
foodsRouter.post('/', (req, res) => res.send('Creazione nuovo alimento')); // Creazione di un nuovo alimento

// UPDATE - (UPDATE)
foodsRouter.put('/:id', (req, res) => res.send(`Aggiornamento alimento`)); // Aggiornamento completo di un alimento

// PATCH - (MODIFY)
foodsRouter.patch('/:id', (req, res) => res.send(`Aggiornamento parziale alimento`)); // Aggiornamento parziale di un alimento

// DELETE - (DESTROY)
foodsRouter.delete('/:id', (req, res) => res.send(`Eliminazione alimento`)); // Eliminazione di un alimento

// Esportazione del modulo
module.exports = foodsRouter;