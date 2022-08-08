const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.path = '/api/quasar';

        // Config body request parser
        this.app.use( express.json() );
        //Middlewares
        this.middlewares();
        //API Routes
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        //Public Directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.path, require('../routes/quasar'));
    }

    listen() {
        this.app.listen(this.port)

        console.log('Escuchando el puerto', this.port);
    }
}

module.exports = Server;