const crypto = require('crypto')

class Security {
    constructor() { }

    Login(username, password) {
        //for now just create a token
        return new Promise((resolve, reject) => {
            let token = crypto.randomBytes(16).toString('hex')
            resolve(token)
        })
    }
}

let instance

function GetInstance() {
    if (!instance) {
        instance = new Security()
    }
    return instance
}

module.exports = GetInstance()