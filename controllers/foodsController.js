
const objectsFoods = require("../data/db")

// READ - (INDEX)
function index(req, res) {

    // req query è sempre truthy quindi bisogna porre una condizione sul valore di tags.
    if (req.query.tags) {
        const query = req.query.tags;
        let copyArray = [...objectsFoods];
        copyArray = copyArray.filter(arrays => arrays.tags.includes(query));
        res.json(copyArray);
    } else {
        const response = {
            conteggio: objectsFoods.length,
            foods: objectsFoods
        };
        res.json(response);
    };

} // Richiesta get generica

// READ - (SHOW)
function show(req, res) {

    const parametro = parseInt(req.params.id);
    const filtredArray = objectsFoods.find(element => element.id === parametro);

    if (filtredArray) {
        const response = {
            length: filtredArray.length,
            item: filtredArray
        }
        res.json(response)
    } else {
        res.sendStatus(404);

    }

} // Richiesta get specifica

// CREATE - (STORE)
function store(req, res) {

    let flagID = 0
    objectsFoods.forEach(element => {
        if (flagID < element.id) {
            flagID = element.id;
        }
    });

    // Creiamo un nuovo elemento da inserire nell'array del db.js
    const newAliment = {
        id: ++flagID,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags,
    }
    objectsFoods.push(newAliment)
    res.status(201).json(newAliment);
    console.log({
        testo: "Il nuovo alimento inserito è il seguente:",
        oggetto: newAliment,
    });

}  // Creazione di un nuovo alimento.

// UPDATE - (UPDATE)
function update(req, res) {

    const parametro = parseInt(req.params.id);
    const filtredArray = objectsFoods.find(element => element.id === parametro);

    if (filtredArray) {
        for (const key in filtredArray) {
            filtredArray[key] = req.body[key]
        }
        res.json(filtredArray)
    } else {
        res.status(404).json({
            length: 0,
            error: "Nessun elemento trovato"
        })
    }


}


// PATCH - (MODIFY)
function modify(req, res) {
    res.send(`Aggiornamento parziale alimento`)
}; // Aggiornamento parziale di un alimento

// DELETE - (DESTROY)
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const filtred = objectsFoods.findIndex(indice => indice.id === id);
    console.log(filtred);

    if (filtred !== -1) {
        objectsFoods.splice(filtred, 1)
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }

}  // Eliminazione di un alimento

function error(req, res) {
    res.status(404).send("Non è stato possibile trovare la pagina");
};

module.exports = { index, show, store, update, modify, destroy, error };