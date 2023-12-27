const { Product } = require("../models/Product.model")

const ProductController = {
    getAll: async (req, res) => {
        try {
            const products = await Product.find()
            res.status(200).send(products)
        } catch (error) {
            res.status(404).send("an error occured while getting products")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Product.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("an error occured while getting product by id")
        }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params
            await Product.findByIdAndDelete(id)
            res.send("Item deleted")
        } catch (error) {
            res.status(404).send("an error occured while deleting product")
        }
    },
    add: async (req, res) => {
        try {
            const { title, price, description, image } = req.body
            const newProduct = new Product({ title, price, description, image })
            await newProduct.save()
            res.status(201).send("New product created")
        } catch (error) {
            res.status(404).send("an error occured while posting data")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { title, price, description, image } = req.body
            await Product.findByIdAndUpdate(id, { title, price, description, image })
            res.status(203).send("Item updated")
        } catch (error) {
            res.status(404).send("an error occurred while editing product")
        }
    }
}

module.exports = { ProductController }