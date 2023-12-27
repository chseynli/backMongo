const express = require("express")
const app = express()
const { default: mongoose } = require("mongoose")
const ProductRouter = require("./routes/Product.routes")
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://chseynli:lacasadepapel@cluster0.bebw4po.mongodb.net/").then(res => {
    console.log("connected to db")
})
app.use("/products", ProductRouter)

app.listen(PORT, () => {
    console.log("Backend running on 5000")
})