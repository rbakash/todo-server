const fs = require("fs").promises;
const path = require("path");
const database = require("../helper/db-helper");

exports.addItem = async (req, res) => {

  try {
    
    // Insert the todo item
    let insertQuery = `INSERT INTO tbl_todo (title, isCompleted) 
    VALUES ( ${database.escape(req.body.title)}, 
    ${database.escape(req.body.isCompleted)==1  ? 1 : 0});`;

    database.query(insertQuery, (error, results, fields) => {
     
      if (error) {
        throw error;
      }
      res.status(200).json({ message: "New todo list task added",data:{insertId: results.insertId} });
    });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: error.message });

  }
};

exports.getItem = async (req, res) => {

  try {    
    // Retreive all the Items the todo item
    let retrieveQuery = `SELECT id,title,isCompleted FROM tbl_todo;`;

    database.query(retrieveQuery, (error, results, fields) => {

      if (error) {
        return console.error(error.message);
      }

      res.status(200).json({ message: "All the To do list tasks",data:results });
    });
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: error.message });

  }
};

exports.updateItem = async (req, res) => {

  try {
    
    // Update the todo item
    let updateItemQuery = `UPDATE tbl_todo SET title = ${database.escape(req.body.title)}
    ,iscompleted=${database.escape(req.body.isCompleted) ==1  ? 1 : 0} 
    WHERE (id = ${database.escape(req.params.task_Id)});`;

    database.query(updateItemQuery, (error, results, fields) => {
     
      if (error) {
        throw error;
      }
      res.status(200).json({ message: "Updated the todo list task",data:[] });
    });
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: error.message });

  }
};

exports.deleteItem = async (req, res) => {

  try {    
    // Delete the todo item
    let retrieveQuery = `DELETE FROM tbl_todo WHERE (id = ${database.escape(req.params.task_Id)});`;

    database.query(retrieveQuery, (error, results, fields) => {

      if (error) {
        return console.error(error.message);
      }

      res.status(200).json({ message: "Deleted the To do list task",data:[] });
    });
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: error.message });
    
  }
};