const restify = require('restify');
const { v1Router } = require('./api');

const createApp = async () => {
    const app = restify.createServer({
        name: 'Simple Server',
        version: '1.0.0'
    });

    app.use(restify.plugins.bodyParser());
    app.use(restify.plugins.queryParser());

    app.get('/', (req, res) => {
        res.send(200, { message: 'Successfully to get main server'});
    });

    v1Router.routes(app);

    return app;
};



module.exports.createApp = createApp;