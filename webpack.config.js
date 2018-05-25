const path = require("path");
module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['React','es2015']

                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                loader:'url-loader?limit=2048'
            },
        ]
    },
    entry:{
        app:path.join(__dirname,'src/app','index.js')
    },
    output:{
        filename:'bundle.js',
        path:__dirname+"/asset"
    },
    devServer: {
        port:3000,
        contentBase: path.join(__dirname, "asset")
    }
};