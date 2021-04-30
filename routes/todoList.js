var express = require("express");
var router = express.Router();
var todoListController = require("../services/todoListController");

/* GET Todolist Items */
router.get("/tasks", function (req, res) {
  todoListController.getItem(req, res);
});

/* POST Todolist Item */
router.post("/task", function (req, res) {
  todoListController.addItem(req, res);
});

/* PUT Todolist Item */
router.put("/task/:task_Id", function (req, res) {
  todoListController.updateItem(req, res);
});

/* DELETE Todolist Item */
router.delete("/task/:task_Id", function (req, res) {
  todoListController.deleteItem(req, res);
});

// Catch all unknown route
router.get("*", function (req, res) {
  res.status(404).json({ message: "Unknown route" });
});

module.exports = router;
