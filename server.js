// Needs to be run by using 'node server.js' to allow database usage
// Server for backend implementation

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sbudb"
});

con.connect(err => {
    if(err) throw err;
});

app.use(cors()); // Will be used for access control in the future

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

app.get('/actors/:query'), (req, res) => {
    console.log('movies')

    con.query('SELECT * FROM actors WHERE name LIKE %' + req.params.query + '%', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                actors: results
            })
        }
    });
}

app.get('/movies/:query'), (req, res) => {
    console.log('movies')
    con.query('SELECT * FROM movies WHERE name LIKE %' + req.params.query + '%', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                movies: results
            })
        }
    });
}

app.get('/director/:query'), (req, res) => {
    con.query('SELECT * FROM directors WHERE name LIKE %' + req.params.query +'%', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                directors: results
            })
        }
    });
}

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
    // Waits for a request from client 
    console.log('Go to localhost:4000/');
});