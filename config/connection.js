// // *********************************************************************************
// // CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// // *********************************************************************************

// var mysql = require("mysql");

// // we placed the connections in this source object
// var source = {
//   // localhost
//   localhost: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "burger_db"
//   },

  
//    var connection = mysql.createConnection(keys);
  
//    connection.connect(error => {
//     if (error) {
//       console.log(error);
//       return;
//     };
//     console.log("Connected as id " + connection.threadId);
//   });
  
//    module.exports = connection; 
  
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
