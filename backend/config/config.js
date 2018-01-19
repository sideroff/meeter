module.exports = {
    environment: process.env.NODE_ENV || 'development',
    webServer: {
        port: process.env.NODE_PORT || 3000,
        publicFolderPath: '/src/',
        extentionToMime: {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.txt': 'text/plain',
            '.ico': 'image/x-icon',
            '.jpg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.woff': 'application/font-woff',
            '.woff2': 'application/font-woff2'
        },
    },
    esb: {
        port: process.env.NODE_ESB_PORT || 9000,
        services: {

        },
    }
}