import express from 'express'
import userRouter from './routers/userRouter/user.js'
import {databse} from './config/dbConfig.js'

databse()

const app = express()
app.use(express.json())

const port = 3004

app.use('/', userRouter)



app.listen(port, () => {
    console.log(`user service listening on port ${port}`)
})
