const {readFile} = require('../helpers/jsonFile');
const Position = require('../models/Position');
const Satellite = require('../models/Satellite');
const Location = require('../services/Location');
const Message = require('../services/Message');

class QuasarController {
    createSatellites() {
        const satellites = [
            {
                name: "Kenobi",
                distance: 100.0,
                message: ["este","es","","mensaje", ""]
            },
            {
                name: "Skywalker",
                distance: 115.5,
                message: ["","es","","", "secreto"]
            },
            {
                name: "Sato",
                distance: 142.7,
                message: ["este","es","un","mensaje", ""]
            },
        ];
    
        const positions = [
            {
                x: -500.0,
                y: -200.0
            },
            {
                x: 100.0,
                y: -100.0
            },
            {
                x: 500.0,
                y: 100.0
            },
        ];
        
        satellites.forEach((satelliteElement, index) => {
            let position = new Position( positions[index].x, positions[index].y, satelliteElement.distance );
            let satellite = new Satellite( satelliteElement.name, satelliteElement.message, position.getPosition() );
            satellite.addNewSatellite( satellite.getSatellite() );
        });
    }

    findPositionSatellites() {
        const fileData = readFile();
        let positionsArray = [];
        
        fileData.table.forEach((element) =>{
            positionsArray.push(element.satellite.position) ;
        });
    
        let finalPosition = new Location();
    
        return finalPosition.getLocation(positionsArray);
    }
    
    getMessagesFromFile() {
        console.log("ingresa a obtener el mensaje");
        
        const fileData = readFile();
        
        const arrMessages = [];
        
        fileData.table.forEach((data, index) => {
            arrMessages[index] = data.satellite.message;
        });
    
        console.log(arrMessages);
        let message = new Message();
        return message.getMessage(arrMessages[0], arrMessages[1], arrMessages[2]);
    }
}

module.exports = QuasarController;