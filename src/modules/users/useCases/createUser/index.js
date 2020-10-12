
const createUser = async (req, res) => {
    res.send(200, { message: 'Succesfully to create an users'});
};

module.exports.createUser = createUser;