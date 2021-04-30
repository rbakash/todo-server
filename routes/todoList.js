var express = require('express');
var router = express.Router();
var todoListController = require('../services/todoListController');

/* POST Todolist Item */
router.post('/add',function (req, res) {
  todoListController.addItem(req, res);
});

router.get('*', function(req, res){
  res.status(404).json({ message: "Unknown route" });
  });
module.exports = router;