const path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'transpiled', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};