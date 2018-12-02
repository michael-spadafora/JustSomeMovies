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

app.get('/persons/:query'), (req, res) => {
    con.query('SELECT * FROM person WHERE name LIKE ' + req.params.query, (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                persons: results
            })
        }
    });
}

app.get('/movies/:query'), (req, res) => {
    con.query('SELECT * FROM movies WHERE name LIKE ' + req.params.query, (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                persons: results
            })
        }
    });
}

app.get('/director/:query'), (req, res) => {
    con.query('SELECT * FROM directors WHERE name LIKE ' + req.params.query, (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                persons: results
            })
        }
    });
}

app.get('/actors', (req, res) => {
    con.query('SELECT * FROM person p INNER JOIN actors a ON p.p_id = a.actor_id', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                actors: results
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
            con.query('SELECT m.movie_id AS movie_id, m.title AS title, m.poster_url AS poster_url, ai.actor_role AS actor_role FROM movies m INNER JOIN acts_in ai ON m.movie_id = ai.movie_id INNER JOIN person p ON p.p_id = ai.actor_id WHERE p_id = ?;', req.params.id, function(err,results2){
                if(err)
                    return res.send(err);
                else { 
                    return res.json({
                        actor: results, movies: results2
                    });
                }
            });
        }
    });
});

app.get('/m/:id',function(req,res) {
    con.query('SELECT * FROM movies WHERE movie_id = ?', req.params.id, function(err,results){
        if(err)
            return res.send(err);
        else {
            return res.json({
                movie: results
            });
        }
    });
});

app.listen(4000, () => {
    // Waits for a request from client 
    console.log('Go to localhost:4000/');
});