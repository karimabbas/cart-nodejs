const express = require('express')
require('./src/db/mongoose')
const useRouter = require('./src/routers/user')
const prodRouter = require('./src/routers/products')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(session({
    secret:'mysecret' ,
    resave : false ,
    saveUninitialized : false ,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(useRouter)
app.use(prodRouter)



app.listen(port, ()=>{
    console.log("Server is up on port"+port)
})