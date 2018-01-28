const esbConnector = new require(process.cwd() + '/backend/esbConnector.js')

export default class ServiceConsumer {
    constructor() {
        super()
    }
    
    Initialize() {
        return esbConnector.Connect()
    }

    Consume(serviceID, params) {

    }
}