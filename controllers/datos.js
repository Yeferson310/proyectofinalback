// este es el login de usuario 
var nombreUsuario = prompt("What's your name?");

var CI = prompt("What's your CI?");

var tipoUsuario = prompt("What's your user type?");

let USUARIOS = require("../USUARIOS")

exports.list = (req, res) => {
    res.json(USUARIOS)
}

// esta es la verificacion de que el usuario exsiste, MECANISMO DE AUTENTICACION
exports.searchUsuario = (req, res) => {
    const CI = Number(req.params.CI)
    const result = USUARIOS.find((Usuario) => Usuario.CI === CI)
    if (!result) {
        res.status(400).json({
            error: 'no se encontro el usuario solicitado'
        })
    }
    res.json(result)
}

// esto es para registrar un usuario 
exports.addUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    const validarCI = USUARIOS.find(
        (USUARIOS) => USUARIOS.CI === nuevoUsuario.CI
    );

    if (validarCI) {
        res.status(400).json({
            error: 'el id esta siendo utilizado'
        });

    }
    USUARIOS.push(nuevoUsuario)
    res.status(200).json(USUARIOS)
};

parseInt(tipoUsuario);
if (tipoUsuario == 1) {
    console.log(/api/pokemones);
}