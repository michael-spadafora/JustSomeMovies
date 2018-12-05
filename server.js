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

app.get('/search/p', (req, res) => {
    // Takes SQL query and creates a GET method route to send data to /movies path
    // Once client calls for data from /movies the results of the query is sent
    // Can be changed to reference specific searches 
    con.query('SELECT * FROM person WHERE p_name LIKE ?', '%' + req.query.query + '%', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                movies: results
            })
        }
    });
});

app.get('/search/m', (req, res) => {
    // Takes SQL query and creates a GET method route to send data to /movies path
    // Once client calls for data from /movies the results of the query is sent
    // Can be changed to reference specific searches 
    con.query('SELECT * FROM movies WHERE title LIKE ?', '%' + req.query.query + '%', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                movies: results
            })
        }
    });
});


app.get('/actors/sortbyname', (req, res) => {
    con.query('SELECT * FROM person p INNER JOIN actors a ON p.p_id = a.actor_id ORDER BY p.p_name', (error,results) => {
        if(error) 
            return res.send(error);
        else {
            return res.json({
                actors: results
            })
        }
    });
});

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

app.get('/directors', (req, res) => {
    con.query('SELECT * FROM person p INNER JOIN directors a ON p.p_id = a.director_id', (error,results) => {
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
    con.query('SELECT *, DATE_FORMAT(dob,"%M %d, %Y") AS dob FROM person WHERE p_id = ?', req.params.id, function(err,results){
        if(err)
            return res.send(err);
        else {
            con.query('SELECT m.movie_id, m.title, m.poster_url, ai.actor_role FROM movies m INNER JOIN acts_in ai ON m.movie_id = ai.movie_id INNER JOIN person p ON p.p_id = ai.actor_id WHERE p_id = ?;', req.params.id, function(err,results2){
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
    con.query('SELECT *, DATE_FORMAT(release_date,"%M %d, %Y") AS release_date FROM movies WHERE movie_id = ?', req.params.id, function(err,results){
        if(err)
            return res.send(err);
        else {
            con.query('SELECT p.p_id ,p.p_name,p.img_url, ai.actor_role FROM movies m INNER JOIN acts_in ai ON m.movie_id = ai.movie_id INNER JOIN person p ON p.p_id = ai.actor_id WHERE m.movie_id = ?;', req.params.id, function(err,results2){
                if(err)
                    return res.send(err);
                else {
                    con.query('SELECT p.p_id, p.p_name, p.img_url FROM movies m INNER JOIN directs d ON m.movie_id = d.movie_id INNER JOIN person p ON p.p_id = d.director_id WHERE m.movie_id = ?;', req.params.id, function(err,results3){
                        if(err)
                            return res.send(err);
                        else {
                            con.query('SELECT p.p_id, p.p_name, p.img_url FROM movies m INNER JOIN produces pr ON m.movie_id = pr.movie_id INNER JOIN person p ON p.p_id = pr.producer_id WHERE m.movie_id = ?;', req.params.id, function(err,results4){
                                if(err)
                                    return res.send(err);
                                else {
                                    con.query('SELECT p.p_id, p.p_name, p.img_url, GROUP_CONCAT(wo.member_role SEPARATOR ", ") AS member_role FROM movies m INNER JOIN works_on wo ON m.movie_id = wo.movie_id INNER JOIN person p ON p.p_id = wo.production_team_member_id WHERE m.movie_id = ? GROUP BY p.p_id;', req.params.id, function(err,results5){
                                        if(err)
                                            return res.send(err);
                                        else { 
                                            con.query('SELECT d.dist_id, d.dist_name, d.location FROM movies m INNER JOIN distributions di ON di.movie_id = m.movie_id INNER JOIN distributors d ON d.dist_id = di.dist_id WHERE m.movie_id = ?;', req.params.id, function(err,results6){
                                                if(err)
                                                    return res.send(err);
                                                else { 
                                                    con.query('SELECT GROUP_CONCAT(g.genre SEPARATOR ", ") AS genres FROM movies m INNER JOIN movie_genres mg ON m.movie_id=mg.movie_id INNER JOIN genres g ON g.genre_id=mg.genre_id WHERE m.movie_id = 1 GROUP BY m.movie_id;', req.params.id, function(err,results7){
                                                        if(err)
                                                            return res.send(err);
                                                        else { 
                                                            return res.json({
                                                                movie: results, actors: results2, directors: results3, producers: results4, crew: results5, distributors: results6, genres: results7
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

app.listen(4000, () => {
    // Waits for a request from client 
    console.log('Go to localhost:4000/');
});