const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config();
const connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.MYSQL_PORT,
})

connection.connect( (err) => {
    if ( err )
        console.log(err);
    console.log("Connected to Database!!");
     
} )

module.exports = connection;