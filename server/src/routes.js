const AController = require("./controllers/AController");

module.exports = (app) => {
    //que1
    app.get("/que1", AController.post)
    //que2
    app.get("/que2", AController.post)
};