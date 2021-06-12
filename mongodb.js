const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'shoping-card'

MongoClient.connect(connectionURL , {useNewUrlParser:true} ,(error , client)=>{
    if(error){
        return console.log('unable to connect to database !')
    }


    //const db = client.db(databaseName)

})