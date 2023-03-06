//integracion del front con el nuevo servidor parte 2//

const express = require("express")
const { list, addpokemon, searchpokemon } = require("../controllers/pokemon")
const router = express.Router()



router.get("/pokemones", list)
router.get("/pokemones/:id", searchpokemon)
router.post("/pokemones/nuevo", addpokemon)



module.exports = router;