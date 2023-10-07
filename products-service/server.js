import express from 'express'
const app=express()
app.use(express.json())
import connection from './config/dbConfig.js'
import adminRouter from './Routes/adminRoutes/routes.js'
import userRouter from './Routes/userRoutes/user.js'
const port=3003
app.use('/product-srv/admin',adminRouter)
app.use('/product-srv/',userRouter)

connection()
app.listen(port,(err)=>{
    
    console.log(`products service listening on port ${port}`)
})