const express = require('express')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        //API Routes
        this.routes();
    }

    middlewares() {
        //Public Directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.get('/api', function (req, res) {
            res.send('Hello World NODEJS EXPRESS')
        });
    }

    listen() {
        this.app.listen(this.port)

        console.log('Escuchando el puerto', this.port);
    }
}

module.exports = Server;