const restify = require('restify');
const {
    MongoClient,
    ObjectId
} = require('mongodb')
const {
    v1Router
} = require('./api');

const createApp = async () => {
    const app = restify.createServer({
        name: 'Simple Server',
        version: '1.0.0'
    });

    app.use(restify.plugins.bodyParser());
    app.use(restify.plugins.queryParser());

    // Connect to mongodb

    MongoClient.connect('mongodb://localhost:27017').then(client => {
        console.log('Succesfully to connect to mongodb')
        const db = client.db("crud_restify")
        const collection = db.collection('users')


        app.get('/users', async (req, res) => {
            const user = await collection.find().toArray()
            res.send(200, {
                message: "Success get data user",
                data: user
            })
        })

        app.post('/users', async (req, res) => {
            const docs = req.body
            const user = await collection.insertOne(docs)
            res.send(200, {
                message: "Successfully to create data user",
                data: user
            })
        })

        app.get('/users/:id', async (req, res) => {
            const query = {
                _id: ObjectId(req.params.id)
            }
            const user = await collection.findOne(query)
            if (!user) {
                return res.send(400, {
                    message: "Could not get data one user"
                })
            } else {
                res.send(200, {
                    message: "Successfully to data one user",
                    data: user
                })
            }

        })

        app.put('/users/:id', async (req, res) => {
            const id = ObjectId(req.params.id)
            const docs = req.body
            const user = await collection.findOneAndUpdate({
                _id: id
            }, {
                $set: docs
            })

            res.send(200, {
                message: "Successfully to update user"
            })
        })

        app.del('/users/:id', async (req, res) => {
            const id = ObjectId(req.params.id)
            const user = await collection.findOneAndDelete({
                _id: id
            })

            res.send(200, {
                message: "Successfully to delete user"
            })
        })

    }).catch(error => {
        console.log('Could not to connect to mongodb')
        console.log(error.message)

    })

    app.get('/', (req, res) => {
        res.send(200, {
            message: 'Successfully to get main server'
        });
    });

    v1Router.routes(app);

    return app;
};



module.exports.createApp = createApp;