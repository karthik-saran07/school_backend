const express = require('express')
const dotenv = require('dotenv')
const schoolRoute = require('./Routes/schoolRoute');
const bodyParser = require('body-parser');


dotenv.config();
const app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


try {
    
    app.listen ( PORT, () => {
        console.log(`Server Running in Port ${PORT}`); 
    } )

} catch (error) {
    console.log("Failed");
    ;
}

app.use("/api", schoolRoute);