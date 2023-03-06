//integracion del front con el nuevo servidor parte 2//

const express = require("express")
const { list, addpokemon, searchpokemon, deletepokemon } = require("../controllers/pokemon")
const router = express.Router()



router.get("/pokemones", list)
router.get("/pokemones/:id", searchpokemon)
router.post("/pokemones/nuevo", addpokemon)
router.delete("/pokemonesDelete/:pokemon", deletepokemon)


module.exports = router;