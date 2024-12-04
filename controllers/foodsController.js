
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
    res.send('Creazione nuovo alimento');
}  // Creazione di un nuovo alimento

// UPDATE - (UPDATE)
function update(req, res) {
    res.send(`Aggiornamento alimento`);
}  // Aggiornamento completo di un alimento

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


module.exports = { index, show, store, update, modify, destroy };