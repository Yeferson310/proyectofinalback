let pokemones = require("../pokemones")

exports.list = (req, res) => {
    res.json(pokemones)
}

exports.searchPokemon = (req, res) => {
    const id = Number(req.params.id)
    const result = pokemones.find((pokemones) => pokemon.id === id)
    if (!result) {
        res.status(400).json({
            error: 'no se encontraron registros con id: ${id}'
        })
    }
    res.json(result)
}


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
