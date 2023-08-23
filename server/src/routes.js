const AController = require("./controllers/AController");

module.exports = (app) => {
    //que1
    app.post("/que1/:NumId", AController.create)
    //que2
    app.post("/que2/:NumId", AController.post)
};