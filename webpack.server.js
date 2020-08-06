const path = require('path');
const merge = require('webpack-merge');
const baseConfig   = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    name:'node-server',
    //default is already browser ,target property needs
    // to be mentioned when you are writing webpack for 
    // different environment in this case node
    target: 'node',

    //tell webpack what is the init(root) file to execute
    //  first for our node server application
    // entry: './src/server/index.js',
    entry: {
        index: ['babel-polyfill',  './src/server/index.js']
    },

    //tell webpack to where to put the output file with given name in which folder
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals:[webpackNodeExternals()]
}

module.exports = merge(baseConfig,config);