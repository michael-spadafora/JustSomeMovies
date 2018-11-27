const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sbudb"
});

con.connect(err => {
    if(err) throw err;
});

app.use(cors());

app.get('/movies', (req, res) => {
    con.query('SELECT * FROM movies', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                movies: results
            })
        }
    });
});

app.get('/persons', (req, res) => {
    con.query('SELECT * FROM person', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                persons: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log('Go to localhost:4000/');
});