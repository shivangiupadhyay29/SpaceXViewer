module.exports = {
    module: {
        rules : [
            {
            test: /\.js?$/,   // js files only not css ,images or json files
            loaders: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets:[
                    'react',
                    'stage-0',    //for asynchronous code
                    ['env' , { 'targets' : { 'browsers' : [ 'last 2 versions' ]  }}]  
                    //env is a master presets to ensure to apply all
                    //rules required to transform the code to work on latest 2 versions of browsers platform
                ]
            }
        }
     ]
    }
}