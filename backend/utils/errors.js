// [0000 - 0999] = esb errors
// [1000 - 1999] = server errors
// [2000 - +inf) - custom errors
const errors = {
    2000: { message: 'Generic error' },
    2001: { message: 'Invalid service called' }
}


module.exports = function (errorCode) {
    if (!errors[errorCode]) {
        errorCode = 2000
    }

    return errors[errorCode]
}