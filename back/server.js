import express, { urlencoded } from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import router from './routes/routes.js'
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors('*'))
app.use('/', router)

connectDB()
app.listen(5000,()=>{
    console.log('back');
    
})

