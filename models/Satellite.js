const {writeFile} = require('../helpers/jsonFile');

class Satellite {

    name = "";
    message = "";
    position = {};
 
    constructor(name, message, position) {
        this.name = name;
        this.message = message;
        this.position = position;
    }

    getSatellite() {
        return {
            "satellite": 
            {
                "name" : this.name,
                "message"    : this.message,
                "position"   : this.position
            }
        }
    }
    
    addNewSatellite(satellite) {
        writeFile(satellite);
    }
}

module.exports = Satellite;