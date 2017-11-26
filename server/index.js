const http = require('http')

const config = require('./config/config')[process.env.NODE_ENV || 'development']
const logger = require('./utils/logger')

let server = http.createServer(requestListener)

server.listen(config.port, function () {
    logger.Log('Server listening on port: ' + config.port)
})

function requestListener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
}