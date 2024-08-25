const calculateDistance = require("../Distance/calculateDistance");
const connection = require("../Model/schoolModel");

const createSchool =  ( req, res ) => {

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Please provide school details" });
    }   
    const {name, address, latitude, longitude} = req.body;
    
    const checkQuery = "SELECT * FROM school WHERE name = ?";
    const insertQuery = "INSERT INTO school ( name, address, latitude, longitude ) values (?, ?, ?, ?)";

    connection.query( checkQuery, [name], ( err, result ) => {
        if ( err )
            return res.json(err);
    if ( result.length > 0 )
        return res.json({message : "Already exists !!"});
    else {
        
        connection.query(insertQuery, [name, address, latitude, longitude], (err, result) => {
        if ( err )
            throw err;
        res.json({message : "School inserted"});
    } )
    }
            
    } )
};

const getAllSchool = ( req, res ) => {

    const query = "SELECT * FROM school";
    connection.query( query, ( err, result ) => {
        if ( err )
            return res.json(err);
        return res.json(result)
    } )

}

const getNearbySchool = ( req, res ) => {
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Please provide user geoloaction details" });
    }   

    const userLatitude = req.body.latitude;
    const userLongitude = req.body.longitude;
    
    calculateDistance( userLatitude, userLongitude, ( error, result ) => {
        if ( error )
            return res.json({message : "Cannot get schools!!"});
        else
            return res.json(result);
    } )
    
};

const deleteSchool = ( req, res ) => {

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Please provide school details" });
    }   

    const { name } = req.body;
    const deleteQuery = "DELETE FROM school WHERE name = ?";
    connection.query( deleteQuery, [name], ( err, result ) => {
        if ( err )
            return res.json(err);
        const updateIdQuery = "ALTER TABLE school AUTO_INCREMENT = 1";
        connection.query ( updateIdQuery, (err, res) => {
        if ( err )
            console.log(err);
        console.log("Id updated");  
    } )
        res.json({message : "Deleted sucessfully"});
    } )

    const updateIdQuery = "ALTER TABLE school AUTO_INCREMENT = 1";
    connection.query ( updateIdQuery, (err, res) => {
        if ( err )
                console.log(err);
            console.log("Id updated");
})
}

module.exports = { createSchool, getNearbySchool, deleteSchool, getAllSchool }