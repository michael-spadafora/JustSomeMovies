const mysql = require('mysql');
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('08891d181fe7a9741eb64629d03c4622', true);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "sbudb"
});

var movieid;
var movietitle;
var parameters;
var gRows;

/*con.query('SELECT * FROM movies', function(err,rows,fields) {
    if(err) throw err;
    gRows = rows;
    apiCallPeople();
});*/

con.query('SELECT * FROM person', function(err,rows,fields) {
    if(err) throw err;
    gRows = rows;
    apiCallDob();
});

var i = 0;
var actorName;
var gender;
var role;
var personid;
var pid;
var dob;

function setValue(value) {
    pid = value;
}

function apiCallDob() {
    if(i==gRows.length) return;
    personid = gRows[i].tpid;
    parameters = {
        id: personid
    };
    moviedb.personInfo(parameters).then(res => {
        dob = res.birthday;
        setTimeout(function(){sqlUpdateDob(dob,personid)},100)
    }).catch(console.error);
    i++;
    setTimeout(apiCallDob, 500);
}

function sqlUpdateDob(dob, personid) {
    var updateDob = `UPDATE person SET dob = ? WHERE tpid = ?`;
    con.query(updateDob, [dob, personid], function (err, result) {
        if (err) throw err;
        console.log(personid,dob);
    });
}

function apiCallPeople() {
    if(i==gRows.length) return;

    movieid = gRows[i].movie_id;
    movietitle = gRows[i].title;
    parameters = {
        query: movietitle
    }
    moviedb.searchMovie(parameters).then(res => {
        moviedb.movieCredits(res.results[0].id).then(res2 => {
            //console.log(res2.cast[0].name);
            //for(var j in (res2.cast)) {
            var j = 0;
            sqlCrew(res2,j);
            //}
        }).catch(console.error);
    }).catch(console.error);

    i++;
    setTimeout(apiCallPeople,20000);
}

function apiCallImages() {
    if(i == gRows.length) return;
    movietitle = gRows[i].title;
    parameters = {
        query: movietitle
    }
    
    moviedb.searchMovie(parameters).then(res => {
        posterurl = res.results[0].poster_path;
        backdropurl = res.results[0].backdrop_path;
        setTimeout(function(){
            var updateImages = `UPDATE movies SET poster_url = ?, backdrop_url = ? WHERE title = ?`;
            con.query(updateImages, [posterurl, backdropurl, movietitle], function (err, result) {
                if (err) throw err;
                console.log(movietitle,posterurl);
            });
        },100);
    }).catch(console.error);
    i++;
    setTimeout(apiCallImages,1000);
}

function sqlCrew(res2,j) {
    if(j == res2.crew.length) return;

    crewName = res2.crew[j].name;
    gender = res2.crew[j].gender;
    department = res2.crew[j].department;
    personid = res2.crew[j].id;
    job = res2.crew[j].job;
    if(gender == 1) {
        gender = "female";
    }
    else if(gender == 2){
        gender = "male";
    }
    else if(gender == 0) {
        gender = "";
    }
    var sql = `INSERT IGNORE INTO Person(p_name, gender, tpid) VALUES (?,?,?)`;
    con.query(sql, [crewName, gender, personid], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            setTimeout(function(){
                var getId = `SELECT p_id FROM person WHERE p_name = ?`
                con.query(getId, crewName, function(err,result) {
                    if(err) throw err;
                    setValue(result[0].p_id);
                    console.log(crewName,gender,department);
                    if(department == "Directing") {
                        var directs = `INSERT IGNORE INTO directs(director_id, movie_id) VALUES (?,?)`;
                        con.query(directs, [pid, movieid], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    }
                    else if(department == "Production") {
                        var produces = `INSERT IGNORE INTO produces(producer_id, movie_id) VALUES (?,?)`;
                        con.query(produces, [pid, movieid], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    }
                    else {
                        var workson = `INSERT IGNORE INTO works_on(production_team_member_id, movie_id,member_role) VALUES (?,?,?)`;
                        con.query(workson, [pid, movieid, job], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    }
                });
            },100);
        }
        else {
            setValue(result.insertId);
            if(department == "Directing") {
                setTimeout(function(){
                    var sql2 = 'INSERT IGNORE INTO directors(director_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(result.insertId + " into directors");
                        setValue(result.insertId);
                        console.log(crewName,gender,department);
                        var directs = `INSERT IGNORE INTO directs(director_id, movie_id) VALUES (?,?)`;
                        con.query(directs, [pid, movieid], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    });
                },100);
            }
            else if(department == "Production") {
                setTimeout(function(){
                    var sql2 = 'INSERT IGNORE INTO producers(producer_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(result.insertId + " into producers");
                        setValue(result.insertId);
                        console.log(crewName,gender,department);
                        var produces = `INSERT IGNORE INTO produces(producer_id, movie_id) VALUES (?,?)`;
                        con.query(produces, [pid, movieid], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    });
                },100);
            }
            else {
                setTimeout(function(){
                    var sql2 = 'INSERT IGNORE INTO production_team_members(production_team_member_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(result.insertId + " into production team members");
                        setValue(result.insertId);
                        console.log(crewName,gender,department);
                        var produces = `INSERT IGNORE INTO works_on(production_team_member_id, movie_id, member_role) VALUES (?,?,?)`;
                        con.query(produces, [pid, movieid, job], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    });
                },100);
            }
        }
    });
    j++;
    setTimeout(function(){sqlCrew(res2,j)},500);
}

function sqlActors(res2,j) {
    if(j == res2.cast.length) return;

    actorName = res2.cast[j].name;
    gender = res2.cast[j].gender;
    role = res2.cast[j].character;
    personid = res2.cast[j].id;
    if(gender == 1) {
        gender = "female";
    }
    else if(gender == 2){
        gender = "male";
    }
    else if(gender == 0) {
        gender = "";
    }
    var sql = `INSERT IGNORE INTO Person(p_name, gender, tpid) VALUES (?,?,?)`;
    con.query(sql, [actorName, gender, personid], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            var getId = `SELECT p_id FROM person WHERE p_name = ?`
            con.query(getId, actorName, function(err,result) {
                if(err) throw err;
                setValue(result[0].p_id);
                console.log(actorName,gender,role);
                var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                con.query(actsin, [pid, movieid, role], function(err,result) {
                    if(err) throw err;
                    //console.log("affected rows:" + result.affectedRows);
                });
            });
        }
        else {
            setValue(result.insertId);
            var sql2 = 'INSERT IGNORE INTO actors(actor_id) VALUES (' + pid + ')';
            con.query(sql2, function(err,result) {
                if(err) throw err;
                console.log(result.insertId + " into actors");
                setValue(result.insertId);
                console.log(actorName,gender,role);
                var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                con.query(actsin, [pid, movieid, role], function(err,result) {
                    if(err) throw err;
                    //console.log("affected rows:" + result.affectedRows);
                });
            });
        }
    });
    j++;
    setTimeout(function(){sqlActors(res2,j)},100);
}
/*con.connect();
var i = 1000;
function movieDistributors() {
    if(i == 4000) return;
    moviedb.companyInfo(i).then(res => {
        console.log(res.name, res.headquarters);
        var sql = `INSERT IGNORE INTO distributors(dist_id, dist_name, location) VALUES(?,?,?)`;
        con.query(sql, [res.id, res.name, res.headquarters], function (err, result) {
            if (err) throw err;
        });
    }).catch(console.error);
    i++;
    setTimeout(movieDistributors,100);
}

movieDistributors();*/