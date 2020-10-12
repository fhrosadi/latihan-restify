
const deleteUser = async (req, res) => {
    res.send(200, { message: `Successfully to delete user with username ${req.params.username}`});
};

module.exports.deleteUser = deleteUser;