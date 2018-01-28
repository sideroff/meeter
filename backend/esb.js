const http = require('http')
const uuidv4 = require('uuid/v4')

const config = require(process.cwd() + '/backend/config')
const logger = require(process.cwd() + '/backend/utils/logger')

let socketsByID = {}
let socketsByServiceID = {}

const server = http.createServer((req, res) => {
    res.writeHead(404)
    res.end()
})

const io = require('socket.io')(server, {
    path: config.esb.defaultPath
})

io.on('connection', socket => {
    socket.on('authenticate', data => {
        if (data.secretPhrase === config.esb.secretPhrase) {
            switch (data.type) {
                case 'provider':
                    socketsByID[socket.id] = socket
                    // register services

                    break;
                case 'consumer':
                    socketsByID[socket.id] = socket
                    break;
                default:
                    socket.emit('authentication_failed', FormatToJSONRPC({ message: 'Your type is not supported! Please choose either "consumer" or "provider".' }))
            }
        }
    })
    socket.emit('connection_approved', { data: 'test' })

    socket.on('request', req => {

        if (!socketsByID[socket.id]) {
            logger.Log(`Socket with id: ${socket.id} tried to access a service without authenticating.`)
            SendServiceResponse(socket, { message: 'Sending requests before authenticationg is not allowed. Please authenticate first' })
            socket.disconnect()
        }

        if (!socketsByServiceID[req.method]) {
            logger.Log(`Socket with id: ${socket.id} tried to access a unexistent service.`)
            SendServiceResponse(socket, { message: 'Invalid or missing service.' })
        }

        logger.Log(JSON.stringify(req))
    })

    socket.on('response', res => {

    })

    socket.on('disconnect', () => {
        io.emit('a socket has disconnected')
    })
})

function SendServiceResponse(socket, data) {
    let response = FormatToJSONRPC(data)
    socket.emit('response', response)
}


function FormatToJSONRPC(data) {
    let jsonrpc = { jsonrpc: "2.0" }
    if (data.result) {
        jsonrpc.result = data.result
    } else {
        jsonrpc.error = data.error || data || 'Generic error!'
    }
}

logger.Log('Starting ESB on port: ' + config.esb.port)
server.listen(config.esb.port, () => {
    logger.Log('Esb is listening on port: ' + config.esb.port)
})