const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000
const mainRouter = require('./routes/jwt')


app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/jwt',mainRouter)




app.listen(port , ()=>{
    console.log(`The server is running on port ${port}`)
})