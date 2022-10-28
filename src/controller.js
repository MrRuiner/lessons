const product = []

exports.deleteproducts = (req, res) => {
    const id = +req.query.id
    const index = product.findIndex(product => product.id == id)
    product.splice(index, 1)
    res.redirect('/')
}

exports.products = (req, res) => {
    res.render('products')
}
