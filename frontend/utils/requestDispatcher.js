class RequestDispatcher {
    constructor() { }

    request(url, params) {
        return new Promise((resolve, reject) => {
            
        })
    }
}



let instance

function GetInstance() {
    if (!instance) {
        instance = new RequestDispatcher
    }

    return instance
}

export default GetInstance()