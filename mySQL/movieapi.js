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

con.query('SELECT * FROM movies', function(err,rows,fields) {
    if(err) throw err;
    gRows = rows;
    apiCallPeople();
});

/*con.query('SELECT * FROM person', function(err,rows,fields) {
    if(err) throw err;
    gRows = rows;
    apiCallPersonImg();
});*/

var i = 19;
var actorName;
var gender;
var role;
var personid;
var pid;
var imgurl;
var dob;
var prodComp;
var prodLocation;
var prodId;

function setValue(value) {
    pid = value;
}

function apiCallReviews() {
    if(i==gRows.length) return;
    movieid = gRows[i].movie_id;
    movietitle = gRows[i].title;
    parameters = {
        query: movietitle
    }
    moviedb.searchMovie(parameters).then(res => {
        moviedb.movieReviews(res.results[0].id).then(res2 => {
            var j = 0;
            sqlReviews(res2,j);
        }).catch(console.error);
    }).catch(console.error);

    i++;
    setTimeout(apiCallReviews,30000);
}

function sqlReviews(res2,j) {
    if(j == res2.results.length) return;

    var sql = `INSERT IGNORE INTO Person(p_name, gender, tpid, img_url) VALUES (?,?,?,?)`;
    con.query(sql, [actorName, gender, personid, imgurl], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            var getId = `SELECT p_id FROM person WHERE p_name = ?`
            con.query(getId, actorName, function(err,result) {
                if(err) throw err;
                setValue(result[0].p_id);
                var sql2 = 'INSERT IGNORE INTO actors(actor_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    console.log(result.insertId + " into actors");
                    console.log(actorName,gender,role);
                    setTimeout(function() {
                        var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                        con.query(actsin, [pid, movieid, role], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
                });
            });
        }
        else {
            setTimeout(function() {
                setValue(result.insertId);
                var sql2 = 'INSERT IGNORE INTO actors(actor_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    console.log(result.insertId + " into actors");
                    setValue(result.insertId);
                    console.log(actorName,gender,role);
                    setTimeout(function() {
                        var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                        con.query(actsin, [pid, movieid, role], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
                });
            },300);
        }
    });
    j++;
    setTimeout(function(){sqlReviews(res2,j)},500);
}

function apiCallProdComps() {
    if(i==gRows.length) return;

    movieid = gRows[i].movie_id;
    movietitle = gRows[i].title;
    parameters = {
        query: movietitle
    }
    moviedb.searchMovie(parameters).then(res => {
        moviedb.movieInfo(res.results[0].id).then(res2 => {
            var j = 0;
            sqlComps(res2,j);
        }).catch(console.error);
    }).catch(console.error);

    i++;
    setTimeout(apiCallProdComps,10000);
}

function sqlComps(res2,j) {
    if(j == res2.production_companies.length) return;
    prodId = res2.production_companies[j].id;
    prodComp = res2.production_companies[j].name;
    prodLocation = res2.production_companies[j].origin_country;
    var sql = `INSERT IGNORE INTO distributors(dist_id, dist_name, location) VALUES (?,?,?)`;
    con.query(sql, [prodId, prodComp, prodLocation], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            setTimeout(function() {
                var getId = `SELECT dist_id FROM distributors WHERE dist_name = ?`;
                con.query(getId, prodComp, function(err,result) {
                    if(err) throw err;
                    var sql2 = 'INSERT IGNORE INTO distributions(dist_id,movie_id) VALUES (' + result[0].dist_id + ','+movieid+')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(prodComp,prodLocation,movietitle);
                    });
                });
            },300);
        }
        else {
            setTimeout(function() {
                var sql2 = 'INSERT IGNORE INTO distributions(dist_id,movie_id) VALUES (' + result.insertId + ','+movieid+')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    console.log(prodComp,prodLocation,movietitle);
                });
            },300);
        }
    });
    j++;
    setTimeout(function(){sqlComps(res2,j)},500);
}

// Will retrieve dobs from api and update person table
function apiCallDob() {
    if(i==gRows.length) return;
    personid = gRows[i].tpid;
    parameters = {
        id: personid
    };
    moviedb.personInfo(parameters).then(res => {
        dob = res.birthday;
        setTimeout(function(){
            var updateDob = `UPDATE person SET dob = ? WHERE tpid = ?`;
            con.query(updateDob, [dob, personid], function (err, result) {
                if (err) throw err;
                console.log(personid,dob);
            });
        },100)
    }).catch(console.error);
    i++;
    setTimeout(apiCallDob, 500);
}

// Will retrieve the profile image url from api and update into person table
function apiCallPersonImg() {
    if(i==gRows.length) return;
    personid = gRows[i].tpid;
    parameters = {
        id: personid
    };
    moviedb.personInfo(parameters).then(res => {
        var imgurl = res.profile_path;
        setTimeout(function(){
            var updatePersonImage = `UPDATE person SET img_url = ? WHERE tpid = ?`;
            con.query(updatePersonImage, [imgurl, personid], function (err, result) {
                if (err) throw err;
                console.log(personid,imgurl);
            });
        },100)
    }).catch(console.error);
    i++;
    setTimeout(apiCallPersonImg, 500);
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
            var j = 0;
            sqlActors(res2,j);
        }).catch(console.error);
    }).catch(console.error);

    i++;
    setTimeout(apiCallPeople,70000);
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
    imgurl = res2.crew[j].profile_path;
    if(gender == 1) {
        gender = "female";
    }
    else if(gender == 2){
        gender = "male";
    }
    else if(gender == 0) {
        gender = "";
    }
    var sql = `INSERT IGNORE INTO Person(p_name, gender, tpid, img_url) VALUES (?,?,?,?)`;
    con.query(sql, [crewName, gender, personid, imgurl], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            var getId = `SELECT p_id FROM person WHERE p_name = ?`
            con.query(getId, crewName, function(err,result) {
                if(err) throw err;
                setValue(result[0].p_id);
                if(department == "Directing") {
                    var sql2 = 'INSERT IGNORE INTO directors(director_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(crewName,gender,department);
                        setTimeout(function(){
                            var directs = `INSERT IGNORE INTO directs(director_id, movie_id) VALUES (?,?)`;
                            con.query(directs, [pid, movieid], function(err,result) {
                                console.log(pid + " into directs");
                                if(err) throw err;
                                //console.log("affected rows:" + result.affectedRows);
                            });
                        },150);
                    });
                }
                else if(department == "Production") {
                    var sql2 = 'INSERT IGNORE INTO producers(producer_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(crewName,gender,department);
                        setTimeout(function(){
                            var produces = `INSERT IGNORE INTO produces(producer_id, movie_id) VALUES (?,?)`;
                            con.query(produces, [pid, movieid], function(err,result) {
                                console.log(pid + " into produces");
                                if(err) throw err;
                                //console.log("affected rows:" + result.affectedRows);
                            });
                        },150);
                    });
                }
                else {
                    var sql2 = 'INSERT IGNORE INTO production_team_members(production_team_member_id) VALUES (' + pid + ')';
                    con.query(sql2, function(err,result) {
                        if(err) throw err;
                        console.log(crewName,gender,department);
                        setTimeout(function(){
                            var produces = `INSERT IGNORE INTO works_on(production_team_member_id, movie_id, member_role) VALUES (?,?,?)`;
                            con.query(produces, [pid, movieid, job], function(err,result) {
                                console.log(pid + " into works on");
                                if(err) throw err;
                                //console.log("affected rows:" + result.affectedRows);
                            });
                        },150);
                    });
                }
            });
        }
        else {
            setValue(result.insertId);
            if(department == "Directing") {
                var sql2 = 'INSERT IGNORE INTO directors(director_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    setValue(result.insertId);
                    console.log(crewName,gender,department);
                    setTimeout(function(){
                        var directs = `INSERT IGNORE INTO directs(director_id, movie_id) VALUES (?,?)`;
                        con.query(directs, [pid, movieid], function(err,result) {
                            console.log(result.insertId + " into directs");
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
                });
            }
            else if(department == "Production") {
                var sql2 = 'INSERT IGNORE INTO producers(producer_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    setValue(result.insertId);
                    console.log(crewName,gender,department);
                    setTimeout(function(){
                        var produces = `INSERT IGNORE INTO produces(producer_id, movie_id) VALUES (?,?)`;
                        con.query(produces, [pid, movieid], function(err,result) {
                            console.log(result.insertId + " into produces");
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
                });
            }
            else {
                var sql2 = 'INSERT IGNORE INTO production_team_members(production_team_member_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    setValue(result.insertId);
                    console.log(crewName,gender,department);
                    setTimeout(function(){
                        var produces = `INSERT IGNORE INTO works_on(production_team_member_id, movie_id, member_role) VALUES (?,?,?)`;
                        con.query(produces, [pid, movieid, job], function(err,result) {
                            console.log(result.insertId + " into works on");
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
                });
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
    imgurl = res2.cast[j].profile_path;
    if(gender == 1) {
        gender = "female";
    }
    else if(gender == 2){
        gender = "male";
    }
    else if(gender == 0) {
        gender = "";
    }
    var sql = `INSERT IGNORE INTO Person(p_name, gender, tpid, img_url) VALUES (?,?,?,?)`;
    con.query(sql, [actorName, gender, personid, imgurl], function (err, result) {
        if (err) throw err;
        if(result.insertId == 0) {
            var getId = `SELECT p_id FROM person WHERE p_name = ?`
            con.query(getId, actorName, function(err,result) {
                if(err) throw err;
                setValue(result[0].p_id);
                var sql2 = 'INSERT IGNORE INTO actors(actor_id) VALUES (' + pid + ')';
                con.query(sql2, function(err,result) {
                    if(err) throw err;
                    console.log(actorName,gender,role);
                    setTimeout(function() {
                        var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                        console.log(pid + " into acts in");
                        con.query(actsin, [pid, movieid, role], function(err,result) {
                            if(err) throw err;
                            //console.log("affected rows:" + result.affectedRows);
                        });
                    },150);
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
                setTimeout(function() {
                    var actsin = `INSERT IGNORE INTO acts_in(actor_id, movie_id, actor_role) VALUES (?,?,?)`;
                    con.query(actsin, [pid, movieid, role], function(err,result) {
                        if(err) throw err;
                        //console.log("affected rows:" + result.affectedRows);
                    });
                },150);
            });
        }
    });
    j++;
    setTimeout(function(){sqlActors(res2,j)},500);
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