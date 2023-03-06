//integracion del front con el nuevo servidor parte 1//

let pokemones = require("../pokemones")

exports.list = (req, res) => {
    res.json(pokemones)
}
// middleware de auth en back (consultarlo si es esto) //
exports.searchPokemon = (req, res) => {
    const id = Number(req.params.id)
    const result = pokemones.find((pokemones) => pokemon.id === id)
    if (!result) {
        res.status(400).json({
            error: 'pagina 404' // mostrar mensaje de error pagina 404 si el pokemon no existe //
        })
    }
    res.json(result)
}

// crear la ruta en el back post/pkmn //
exports.addpokemon = (req, res) => {
    const nuevopokemon = req.body;
    const validarId = pokemones.find(
        (pokemon) => pokemon.id === nuevoPokemon.id
    );

    if (validarId) {
        res.status(400).json({
            error: 'el id esta siendo utilizado'
        });

    }
    pokemones.push(nuevoPokemon)
    res.status(200).json(pokemones)
};
