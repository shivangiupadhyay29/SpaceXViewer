const path = require('path');
const merge = require('webpack-merge');
const baseConfig   = require('./webpack.base');
// const webpackNodeExternals = require('webpack-node-externals');

const config = {
    name:'client',
    target: 'web',

    //tell webpack what is the init(root) file to execute
    //  first for our node server application
    // entry: './src/client/index.js',
    entry: {
        index: ['babel-polyfill', './src/client/index.js']
    },

    //tell webpack to where to put the output file with given name in which folder
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

}

module.exports = merge(baseConfig,config);