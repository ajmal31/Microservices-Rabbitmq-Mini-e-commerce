import adminController from "../../controller/adminController/adminController.js"
import  express from "express"
const app=express()

app.get('/',adminController.check)

export default app
