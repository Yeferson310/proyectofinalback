const router = require('express').Router();

router.post("/register", async (req, res) => {

    res.json({
        error: null,
        data: 'aquí va ir la data'
    })
})

module.exports = router;
