const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : "biakfwiofa7yemdy17zq-mysql.services.clever-cloud.com",
    user : "uesoudpmclkgn0mz",
    password : "PMjkCIZyB4HjgCL8Qu1b",
    database : "biakfwiofa7yemdy17zq",
    port : 3306,
})

connection.connect( (err) => {
    if ( err )
        console.log(err);
    console.log("Connected to Database!!");
     
} )

module.exports = connection;