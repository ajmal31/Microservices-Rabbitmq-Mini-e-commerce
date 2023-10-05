import express from 'express'
import userController from '../../controllers/user/userController.js'
const app=express()
console.log('enter here refres router')

app.post('/cod',userController.cod)

export default app