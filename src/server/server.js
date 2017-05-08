const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const favicon = require('serve-favicon');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const router = require('./Routes/route')
const app = express();
const morgan = require('morgan')
const htmlPlugin = require('html-webpack-plugin');

app.use(morgan('dev'))

require ('./API/Config/datasource')


const compiler = webpack(webpackConfig);

app.use(express.static(__dirname +'../assets'));

app.use(favicon(path.join(__dirname, '../assets', 'images', 'favicon.ico')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}))

router(app);

app.use('*/', (req, res) => {
    console.log("++++");
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

const server = app.listen(3004, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Server is running att ', host, port);
})

module.exports = app;