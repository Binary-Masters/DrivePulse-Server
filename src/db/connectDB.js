const mongoose = require('mongoose');
require('dotenv').config();


const getConnectionURI = ()=>{
    let connectionURI;
    connectionURI = process.env.DB_URI

    connectionURI = connectionURI.replace('<username>',process.env.DB_USER)
    connectionURI = connectionURI.replace('<password>',process.env.DB_PASSWORD)

    return connectionURI
}


const conncectDB = async()=>{
    console.log("Connecting to database....");
    const uri = getConnectionURI();
    await mongoose.connect(uri,{dbName:'ParcelDB'})

    console.log("Connected to database");
}

module.exports = conncectDB