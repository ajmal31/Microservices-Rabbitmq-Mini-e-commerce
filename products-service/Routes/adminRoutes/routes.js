import express from "express";
import adminController from '../../controller/adminController/adminController.js'
import isAuthenticate from "../../middlewares/isAuthenticate.js"
const app=express()

// app.use(isAuthenticate)
app.post('/addProduct',adminController.addProduct)

app.get('/deleteProduct/:id',adminController.deleteProduct)

app.get('/getAllproducts',adminController.getAllproducts)

app.get('/getOneProduct/:id',adminController.getOneProduct)

app.get('/purchase/:id',adminController.purchase)





export default app