class Logger {
    constructor() { }

    Log() {
        console.log.apply(console, arguments)
    }
}

let instance

function GetInstance() {
    if (!instance) {
        instance = new Logger()
    }

    return instance
}

module.exports = GetInstance()
