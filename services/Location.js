const trilateration = require('trilateration');

class Location {
    position = [];

    /**
     * Obtener la posición del mensaje
     * @param {*} position 
     * @returns float
     */
    getLocation(position) {
        try {
            position.forEach((elementPosition, index) =>{
                trilateration.addBeacon(index, trilateration.vector(parseFloat(elementPosition.x), parseFloat(elementPosition.y)));
                trilateration.setDistance(index, parseFloat(elementPosition.distance));
            });
    
            return trilateration.calculatePosition();;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Location