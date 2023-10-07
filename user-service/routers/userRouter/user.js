import express from 'express'
const app=express()

import userController from '../../controller/userController/user-controller.js'



app.get("/",(req,res)=>{
    res.send({message:"hello world ingress is working properly"})
})

// get All users
app.get('/user-srv/',userController.getAllusers)
//GET USE DETAILS
app.get('/user-srv/getUser',userController.getUser)

//USER CREATING
app.post('/user-srv/createUser',userController.createUser)

//USER LOGIN
app.post('/user-srv/userLogin',userController.userLogin)

//USER DELETE
app.get('/user-srv/deleteUser',userController.deleteUser) 





export default app