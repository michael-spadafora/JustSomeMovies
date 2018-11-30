// Needs to be run by using 'node server.js' to allow database usage
// Server for backend implementation

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


app.get('/movies', (req, res) => {
    // Takes SQL query and creates a GET method route to send data to /movies path
    // Once client calls for data from /movies the results of the query is sent
    // Can be changed to reference specific searches 
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

app.get('/sliderImages', (req,res) => {
    con.query('SELECT * FROM movies', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                movies: results
            });
        }
    });
});

app.get('/a/:id',function(req,res) {
    con.query('SELECT * FROM person WHERE p_id = ?', req.params.id, function(err,results){
        if(err)
            return res.send(err);
        else {
            return res.json({
                actor: results
            });
        }
    });
});

app.get('*',(req,res)=> {
    return handle(req,res);
})

app.listen(4000, () => {
    // Waits for a request from client 
    console.log('Go to localhost:4000/');
});