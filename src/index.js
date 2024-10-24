const express = require('express')
const { PORT } = require('./config/env')
const MONGO_DB = require('./config/db')
const ErrorHandlerMiddleWares = require('./middlewares/ErrorHandlerMiddleWares')
const promotionRoute  = require('./routes/routers')


const app = express()
MONGO_DB.connect()
 app.use(express.json())
app.use('/api/promotion',promotionRoute)


app.use(ErrorHandlerMiddleWares.nextError)
app.listen(PORT,()=>{
    console.log(`App listen on port  ${PORT}`);
}) 