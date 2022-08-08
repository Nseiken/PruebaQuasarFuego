
const { response } = require('express');

const { findPositionSatellites, getMessagesFromFile } = require('../helpers/posmsg');
const Position = require('../models/Position');
const Satellite = require('../models/Satellite');

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

const getQuasar = (req, res = response) => {
    res.status(200).json({
        "msg": 'Hello World NODEJS EXPRESS - From Controller'
    });
}

/**
 * Endpoint para obtener la respuesta del mensaje y posición
 * @param {*} req JSON
 * @param {*} res 200,404
 */
const topSecret = async(req, res = response) => {
    const bodySatellites = req.body;

    if (bodySatellites.satellites && bodySatellites.satellites.length > 0) {
        bodySatellites.satellites.forEach((satelliteElement, index) => {
            let position = new Position(positions[index].x, positions[index].y, satelliteElement.distance);
            let satellite = new Satellite(satelliteElement.name, satelliteElement.message, position.getPosition());
            satellite.addNewSatellite(satellite.getSatellite());
        });

        let { x, y } = findPositionSatellites();
        let message = getMessagesFromFile();
        
        if(message == "No se puede determinar el mensaje") {
            res.status(404).json({
                "code": 404,
                message
            }); 
        }

        res.status(200).json({
            "code": 200,
            "position": {
                "x": x,
                "y": y
            },
            message
        });
    } else {
        res.status(404).json({
            "msg": "No se puede determinar el mensaje",
            "code": 404
        });
    }
}

module.exports = {
    getQuasar,
    topSecret
};