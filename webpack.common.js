const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            use: ['file-loader?limit=7000&name=build/image/[name].[ext]']
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
