const connection = require("../Model/schoolModel");

const calculateDistance = ( userLatitude, userLongitude, callback ) => {

    const query = `
    SELECT 
        id,
        name,
        latitude,
        longitude,
        (
            6371 * acos(
                cos(radians(?)) * 
                cos(radians(latitude)) * 
                cos(radians(longitude) - radians(?)) + 
                sin(radians(?)) * 
                sin(radians(latitude))
            )
        ) AS distance 
    FROM
        school
    ORDER BY distance ASC
    `;
    
    connection.query( query, [ userLatitude, userLongitude, userLatitude ], ( error, result ) => {
        if(error)
            return callback(error, null);
        else
        return callback(null, result);
    } )
}

module.exports = calculateDistance;