const htmlwebpackplugin = require("html-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV === "production"? "production" : "development";

module.exports={
    mode: mode,
    entry: "./src/index.js",
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[   {
                    loader : "html-loader",
                    options:{minimize: true}
                        }                  
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },

    plugins:[
        new htmlwebpackplugin({
            template:"./src/index.html",
            filename: "./index.html",
        })
    ],
    
}