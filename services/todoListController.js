const fs = require("fs").promises;
const path = require("path");
const database = require("../helper/db-helper");

exports.addItem = async (req, res) => {
  try {
    
    // Insert the todo item
    let insertQuery = `INSERT INTO tbl_todo (title,description, isCompleted) 
    VALUES ( ${database.escape(req.body.title)}, ${database.escape(
      req.body.description
    )}, 
    ${req.body.isCompleted ? database.escape(req.body.isCompleted) : 0});`;
    database.query(insertQuery, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.status(200).json({ message: "New todo list Item added" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
