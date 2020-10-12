
const getRecentUser = async (req, res) => {
    console.log('Info: Come from getRecentUsers')
    res.send(200, { message: `Successfully to get recent users`});
};

module.exports.getRecentUser = getRecentUser;