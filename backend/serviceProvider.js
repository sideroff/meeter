import ServiceConsumer from "./serviceConsumer";

const esbConnector = new require(process.cwd() + '/backend/esbConnector.js')

export default class ServiceProvider extends ServiceConsumer {
    constructor() {
        super()
    }

    Initialize() {
        return esbConnector.Connect()
    }

    Provide(serviceID, handler) {

    }
}