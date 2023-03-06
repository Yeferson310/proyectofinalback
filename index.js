const bodyParser = require("body-parser")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const pokemonesRoutes = require("./routes/inmobiliaria")
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
// capturar body

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", pokemonesRoutes)
app.use('/api/user', authRoutes);

// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server running ${port}`);
})


/* conexion a base de datos, esto no va porque esta conectado con mongo y es con postgres
const uri = `postgres+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ncdk5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
postgres.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e)) */





// validaciones
router.post('/login', async (req, res) => {


    // create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: { token }
    })
})
