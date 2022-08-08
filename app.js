require('dotenv').config();
const Server = require('./models/Server');

const server = new Server();

/**
 * Inicializamos el servidor de node y cargamos las rutas
 */
server.listen();