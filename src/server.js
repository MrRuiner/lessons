const express = require('express')
const { engine } = require('express-handlebars')

const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('.hbs', engine({ extname: ".hbs" }))
app.set('view engine', '.hbs')
app.set('views', './views')


app.use(routes)

app.listen(8080, () =>{
    console.log('Server is running');
})