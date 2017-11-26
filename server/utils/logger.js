class Logger {
    constructor() { }

    Log(message) {
        console.log(message)
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
