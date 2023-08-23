const AController = require("./controllers/AController");

module.exports = (app) => {
  //get all user
  app.get("/user", AController.index),
  //create user
  app.post("/user/:userId", AController.create),
  //edit
  app.put("/user/:userId", AController.put),
  //delete
  app.delete("/user/:userId", AController.delete),
  //show by id
  app.get("/user/:userId", AController.show);
};