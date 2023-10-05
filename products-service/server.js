import express from 'express'
const app=express()
app.use(express.json())
import connection from './config/dbConfig.js'
import adminRouter from './Routes/adminRoutes/routes.js'
const port=3003
// app.use('/',userRouter)
app.use('/admin',adminRouter)
connection()
app.listen(port,(err)=>{
    
    console.log(`products service listening on port ${port}`)
})