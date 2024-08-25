const connection = require('./Model/schoolModel')

const createSchema = () => {
    
    
    const query = `
    CREATE TABLE IF NOT EXISTS school (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        address VARCHAR(100) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL        
    )`;

    connection.query( query, ( err, result ) => {
        if ( err )
            console.error("Creating table failed : ", err);
        console.log("Table is created !!");        
    } )
}

createSchema()