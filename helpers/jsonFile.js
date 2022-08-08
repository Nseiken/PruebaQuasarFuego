const fs = require('fs');
const data = {};
data.table = [];

/**
 * Escribir el archivo con el objeto JSON proveniente
 * @param {*} objectJSON 
 */
const writeFile = async(objectJSON) => {
    console.log(objectJSON);
    try {
        data.table.push(objectJSON);
        const jsonString = JSON.stringify(data);
        
        fs.writeFileSync(`./output/satellites.json`, jsonString, 'utf8');
    } catch (error) {
        throw error;
    }
}

/**
 * Leemos los datos del json generado
 * @returns JSON
 */
const readFile = () => {
    try {
        const data = fs.readFileSync(`./output/satellites.json`, "utf8");
        return JSON.parse(data);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    writeFile,
    readFile
}