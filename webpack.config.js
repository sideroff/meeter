const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './frontend/index.js',
        vendors: ['react', 'react-redux', 'react-dom', 'redux-thunk', 'redux-logger']
    },
    output: {
        path: path.resolve(__dirname, 'src/compile'),
        filename: 'app.bundle.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.bundle.js' })
    ]
}