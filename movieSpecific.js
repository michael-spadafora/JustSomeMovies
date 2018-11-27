const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('08891d181fe7a9741eb64629d03c4622')
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sbudb"
});
con.connect(function(err) {
    if (err) throw err;    
    var sql = "INSERT INTO movie_genres (movie_id,genre_id) VALUES ?";
    var values = [
        [29,14]
    ];
    
    con.query(sql,[values],function(err,result) {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});
