module.exports = {    
    environment: process.env.NODE_ENV || 'development',
    cache: {
        host: 'redis-14718.c6.eu-west-1-1.ec2.cloud.redislabs.com',
        port: '14718',
        db: 'meeter-all-environment',
        password: 'super-secret-redis-password-dont-tell-anyone'
    },
    database: {
        mongodb: {
            username: 'meeter-user',
            password: 'super-secret-mongodb-password-dont-tell-anyone',
            connectionString: 'mongodb://<dbuser>:<dbpassword>@ds211088.mlab.com:11088/meeter'
        }
    },
    webServer: {
        port: process.env.NODE_WEBSERVER_PORT || 3000,
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
        }
    },
    esb: {
        host: '127.0.0.1',
        port: process.env.NODE_ESB_PORT || 9000,
        secretPhrase: process.env.NODE_ESB_SECRETPHRASE || 'super-secret-esb-password-dont-tell-anyone',
        defaultPath: '/',
        reconnectionAttempts: 2,
    },
}