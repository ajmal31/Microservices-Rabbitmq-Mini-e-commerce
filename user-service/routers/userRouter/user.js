import express from 'express'
const app=express()

import userController from '../../controller/userController/user-controller.js'

//GET USE DETAILS
app.get('/getUser',userController.getUser)

//USER CREATING
app.post('/createUser',userController.createUser)

//USER LOGIN
app.post('/userLogin',userController.userLogin)

//USER DELETE
app.get('/deleteUser',userController.deleteUser) 





export default app