import express from "express";
import adminController from '../../controller/adminController/adminController.js'
import isAuthenticate from "../../middlewares/isAuthenticate.js"
const app=express()

// app.use(isAuthenticate)
app.post('/product-srv/addProduct',adminController.addProduct)

app.get('/product-srv/deleteProduct/:id',adminController.deleteProduct)

app.get('/product-srv/getAllproducts',adminController.getAllproducts)

app.get('/product-srv/getOneProduct/:id',adminController.getOneProduct)

app.get('/product-srv/purchase/:id',adminController.purchase)





export default app