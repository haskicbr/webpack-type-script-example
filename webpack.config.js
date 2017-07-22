var path = require('path');

module.exports = {
    entry : __dirname + '/main',

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    output: {
        filename: 'core.js',
        path: path.resolve(__dirname, 'public/js')
    }
}