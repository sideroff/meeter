import ServiceConsumer from './serviceConsumer';

const http = require('http')
const fs = require('fs')
const path = require('path')

const config = require('./config')
const logger = require('./utils/logger')
const security = require('./utils/security')




esbConnector.Connect().then(() => {
    logger.Log('Web server successfully connected to esb. ')
}).catch(error => {
    logger.Log('Web server could not connect to esb. Shutting down. ' + JSON.stringify(error))
})


class WebServer extends ServiceConsumer {
    constructor() {
        super()

        this.server = null;
    }

    StartServer() {
        this.server = http.createServer(requestListener)

        this.server.listen(config.webServer.port, () => {
            logger.Log(`Web server started in ${config.environment} mode, listening on port: ${config.webServer.port}`)
        })
    }

    Start() {
        let promises = []

        promises.push(this.Initialize())
        promises.push(this.StartServer())

        Promise.all(promises).then(() => {
            logger.Log('Web server has successfully started.')
        }).catch(error => {
            logger.Log('Web server has successfully started.')
        })
    }
}


function requestListener(req, res) {
    let handler

    if (req.method === 'POST') {
        handler = handlePostRequest
    } else {
        handler = handleFileRequest
    }

    handler(req, res).then(function (data) {
        res.writeHead(200, { 'Content-Type': data.mime || 'text/plain' })
        res.write(data.data)
        res.end()
    }).catch(function (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.write(JSON.stringify(error))
        res.end()
    })
}

function handlePostRequest(req, res) {
    return new Promise((resolve, reject) => {
        let body = ''
        req.on('data', data => {
            body += data
        })

        req.on('end', () => {
            body = JSON.parse(body)
            security.Login(body.username, body.password).then(token => {
                resolve({ data: JSON.stringify({ token: token, username: body.username }) })
            }).catch(error => {
                reject(error)
            })
        })
    })
}
function handleFileRequest(req, res) {
    return new Promise(function (resolve, reject) {
        let reqPath = config.webServer.publicFolderPath + (req.url === '/' ? 'index.html' : req.url)
        let filePath = path.join(process.cwd(), reqPath)
        let fileExtention = path.extname(filePath)
        let mime = config.webServer.extentionToMime[fileExtention]
        if (!mime) {
            reject(new Error('Requested file is prohibited.'))
            return
        }
        logger.Log('filepath ' + filePath)
        fs.readFile(filePath, function (error, data) {
            if (error) {
                reject({ error: new Error('File not found'), code: 404 })
                return
            }
            resolve({ data, mime })
        })
    })
}


//TODO abstract this
process.on('unhandledRejection', (reason, p) => {
    logger.Log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})