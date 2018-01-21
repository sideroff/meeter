const http = require('http')

const config = require(process.cwd() + '/backend/config')
const logger = require(process.cwd() + '/backend/utils/logger')

function requestListener(req, res) {
    res.writeHead(404)
    res.end()
}

const server = http.createServer(requestListener)
const io = require('socket.io')(server, {
    path: config.esb.defaultPath
})

io.on('connection', socket => {
    socket.emit('connection_approved', { data: 'test' })

    socket.on('message', msg => {
        logger.Log(JSON.stringify(msg))
    })
    socket.on('disconnect', () => {
        io.emit('a socket has disconnected')
    })
})

logger.Log('Starting ESB on port: ' + config.esb.port)
server.listen(config.esb.port, () => {
    logger.Log('Esb is listening on port: ' + config.esb.port)
})