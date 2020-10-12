const { userRouter } = require('@modules/users/infra/routes');
const v1Router = (app) => {
    const apiVersionPath = '/api/v1';
    app.get(apiVersionPath, (req, res) => {
        res.send(200, { message: 'Server is up on version 1.0.0'});
    });
    userRouter.routes(apiVersionPath, app);
}

module.exports.v1Router = { routes: v1Router };