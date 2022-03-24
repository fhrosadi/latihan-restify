const {
    createApp
} = require("./app");
const port = process.env.PORT || 3000;

(async () => {
    try {
        const app = await createApp();
        app.listen(port, () => {
            console.log(`[ APP ]: Server is up on port ${port}`);
        });
    } catch (ex) {
        console.log(`[ APP ]: Unexpectedly server error!!!`);
        console.log(ex.message);
        console.log(ex);
    }
})();