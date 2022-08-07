const trilateration = require('trilateration');

class Location {
    position = [];

    getLocation(position) {
        console.log("entra a la clase position");
        try {
            position.forEach((elementPosition, index) =>{
                trilateration.addBeacon(index, trilateration.vector(parseFloat(elementPosition.x), parseFloat(elementPosition.y)));
                trilateration.setDistance(index, parseFloat(elementPosition.distance));
            });
    
            const pos = trilateration.calculatePosition();
            
            return `X: ${pos.x}, Y: ${pos.y}`;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Location