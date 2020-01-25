module.exports = {
    read: (req, res) => {
        const db = req.app.get('db')

        db.get_products()
        .then(products => {
            res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    },

    create: (req, res) => {
        const db = req.app.get('db')
        const {img, name, price} = req.body

        db.create_product(img, name, price)
        .then(products => {
            res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(products => {
            res.status(200).send(products);
        })
        .catch(err => res.status(500).send(err));
    },

}