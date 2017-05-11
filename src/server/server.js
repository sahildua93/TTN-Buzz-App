const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const favicon = require('serve-favicon');
const path = require('path');
const webpack = require('webpack');
const passport = require('passport');
const expressSession = require('express-session');
const webpackConfig = require('../../webpack.config');
const router = require('./Routes/route');
const bodyParser = require('body-parser');
const app = express();

require ('./Config/datasource')

const compiler = webpack(webpackConfig);

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

app.use(bodyParser(),
    expressSession({secret: '123456789'}),
    passport.initialize(),
    passport.session());

router(app);
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const server = app.listen(3004, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Server is running att ', host, port);
})

module.exports = app;