const fs = require('fs');
const data = {};
data.table = [];

const writeFile = async(objectJSON) => {
    try {
        data.table.push(objectJSON);
        const jsonString = JSON.stringify(data);
        
        fs.writeFileSync(`./output/satellites.json`, jsonString, 'utf8');
    } catch (error) {
        throw error;
    }
}

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