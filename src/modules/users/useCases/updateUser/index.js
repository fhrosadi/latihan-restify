
const updateUser = async (req, res) => {
    res.send(200, { message: `Successfully to update user with username ${req.params.username}`});
};

module.exports.updateUser = updateUser;