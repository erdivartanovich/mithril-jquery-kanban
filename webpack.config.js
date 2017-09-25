const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ],
    module: {
        rules: [
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader:"file-loader",
            query:{
              name:'[name].[ext]',
              outputPath:'images/'
              //the images will be emmited to public/assets/images/ folder 
              //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
            }
          },
          {
            test: /\.css$/,
            loaders: ["style-loader","css-loader"]
          }
        ]
      }
}
