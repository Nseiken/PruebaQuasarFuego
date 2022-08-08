
const { readFile } = require('../helpers/jsonFile');

const Location = require('../services/Location');
const Message = require('../services/Message');

const findPositionSatellites = () => {
    const fileData = readFile();
    let positionsArray = [];

    fileData.table.forEach((element) => {
        positionsArray.push(element.satellite.position);
    });

    let finalPosition = new Location();

    return finalPosition.getLocation(positionsArray);
}

const getMessagesFromFile = () => {
    console.log("ingresa a obtener el mensaje");

    const fileData = readFile();

    const arrMessages = [];

    fileData.table.forEach((data, index) => {
        arrMessages[index] = data.satellite.message;
    });

    let message = new Message();
    
    return message.getMessage(arrMessages[0], arrMessages[1], arrMessages[2]);
}

module.exports = {
    findPositionSatellites,
    getMessagesFromFile
}