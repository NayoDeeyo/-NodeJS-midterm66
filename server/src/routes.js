const AController = require("./controllers/AController");

module.exports = (app) => {
    //que1
    app.post("/que1", AController.create)
    //que2
    app.post("/que2", AController.post)
};