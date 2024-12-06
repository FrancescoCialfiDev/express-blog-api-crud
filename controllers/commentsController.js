

const objectComments = require("../data/db2")

// READ - (INDEX)
function index(req, res) {
    res.send("Mostrati tutti")
} // Richiesta get generica

// READ - (SHOW)
function show(req, res) {
    res.send("Mostrato 1")

} // Richiesta get specifica

// CREATE - (STORE)
function store(req, res) {
    res.send("Aggiunto")
}  // Creazione di un nuovo alimento.

// UPDATE - (UPDATE)
function update(req, res) {
    res.send("Aggiornato")
}


// PATCH - (MODIFY)
function modify(req, res) {
    res.send("modificato")
}; // Aggiornamento parziale di un alimento

// DELETE - (DESTROY)
function destroy(req, res) {
    res.send("Eliminato")
}  // Eliminazione di un alimento

module.exports = { index, show, store, update, modify, destroy };