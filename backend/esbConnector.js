const config = require(process.cwd() + '/backend/config')
const logger = require(process.cwd() + '/backend/utils/logger')

class EsbConnector {
    constructor() {
        this.connectionAttempts = 0
    }

    Connect() {
        return new Promise((resolve, reject) => {
            logger.Log('Attempting to connect to esb on ' + config.esb.host + ':' + config.esb.port)

            const socket = require('socket.io-client')('http://' + config.esb.host + ':' + config.esb.port, { reconnectionAttempts: config.esb.reconnectionAttempts })

            socket.on('connect', () => {
                logger.Log('Successfully established a connection to esb.')
                resolve(socket)
            })

            socket.on('connect_error', (error) => {
                logger.Log('connect_error ' + JSON.stringify(error))

                if (this.shouldReject) {
                    reject(error)
                }
            })

            socket.on('connect_timeout', (error) => {
                logger.Log('connect_timeout ' + JSON.stringify(error))
            })

            socket.on('error', (error) => {
                logger.Log('error ' + JSON.stringify(error))
            })

            socket.on('disconnect', (disconnect) => {
                logger.Log('disconnect ' + JSON.stringify(disconnect))
            })

            socket.on('reconnect_attempt', (attemptNumber) => {
                logger.Log(`Attempting to reconnect to esb (${attemptNumber}/${config.esb.reconnectionAttempts})`)
                this.shouldReject = config.esb.reconnectionAttempts === attemptNumber
            })

            socket.on('reconnect', (error) => {
                logger.Log('reconnect ' + JSON.stringify(error))
            })

            socket.on('connection_approved', (data) => {
                logger.Log('connection_approved ' + JSON.stringify(data))
            })
        })
    }
}

let instance

function GetInstance() {
    if (!instance) {
        instance = new EsbConnector()
    }

    return instance
}

module.exports = GetInstance()