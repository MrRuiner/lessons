const { Router } = require('express')

const { products } = require('./controller')

const app = Router()

app.get('/', products)

module.exports = app