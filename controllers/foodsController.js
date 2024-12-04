
const objectsFoods = require("../data/db")

// READ - (INDEX)
function index(req, res) {

    const risposta = {
        conteggio: objectsFoods.length,
        foods: objectsFoods
    }
    res.json(risposta)

} // Richiesta get generica

// READ - (SHOW)
function show(req, res) {

    const parametro = parseInt(req.params.id);
    console.log(parametro);
    const filtredArray = objectsFoods.find(element => element.id === parametro)
    res.json(filtredArray)

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
    if (filtred) {
        objectsFoods.splice(filtred, 1)
        res.send("fatto")
    }

}  // Eliminazione di un alimento

module.exports = { index, show, store, update, modify, destroy };