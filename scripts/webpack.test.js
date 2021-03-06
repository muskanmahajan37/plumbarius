var webpack = require('webpack');
var extend = require('./webpack.base');
var shell = require('shelljs');

////////////////////////////////////////////////////////////////////////
//====================================================================//
////////////////////////////////////////////////////////////////////////
//====================================================================//
////////////////////////////////////////////////////////////////////////

let config = extend({
    entry: './src/index.test.js',
    output: {
        path: __dirname + './../dist',
        filename: 'test.bundle.js',
        libraryTarget: 'umd',
    },
    externals: { tap: 'tap' },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: true,
            comments: false,
        }),
    ]
});

////////////////////////////////////////////////////////////////////////
//====================================================================//
////////////////////////////////////////////////////////////////////////
//====================================================================//
////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
    webpack(config, (err, stat) => {
        if(!err){
            resolve(true);
        } else {
            reject(err);
        }
    });
});


