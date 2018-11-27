import React, {Component} from 'react';

class Movie extends Component {

    state = {
        movies: [] // the data returned by databse server
    }

    // Instantiates server request to get data
    componentDidMount() {
        this.getMovies();
    }

    getMovies = _ => {
        // Gets the data from the server and converts the json to state value.
        // Check server.js for documentation on data routing
        fetch('http://localhost:4000/movies')
            .then(response => response.json())
            .then(response => this.setState({movies: response.movies}))
            .catch(err => console.error(err))
    }
    
    // Takes the returned database information and displays the results.
    // Used to map the database values to front-end, using movie_id as a 
    // key for idenfication of order (not really needed for movies)
    renderMovie = ({movie_id, title, poster_url}) => 
    <div key={movie_id} className="movieBox">
        <img className="image" src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} />
        <div className="imgText">{title}</div>
    </div>

    render() {
        const {movies} = this.state;
        return (
            <div className = "container">
                {movies.map(this.renderMovie)}
                {/* Takes the array of movie data and renders the items */}
                <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
                <style jsx global> {`
                    .container{
                        display: grid;
                        grid-gap: 10px;
                        grid-template-columns:repeat(auto-fill,200px);
                    }
                    img{
                        width: 200px;
                        border-radius:5px;
                        transition: all .2s ease-in-out;
                    }
                    .movieBox {
                        position:relative;
                        width:200px;
                        height:280px;
                        margin:10px;
                    }
                    .movieBox img {
                        display:block;
                    }
                    .movieBox:hover > .imgText {
                        opacity:1;
                        cursor:pointer;
                    }
                    .movieBox:hover > img {
                        opacity:0.3;
                        cursor:pointer;
                        transform:scale(0.97);
                    }
                    .imgText {
                        opacity:0;
                        color: black;
                        font-size: 20px;
                        transition: .3s ease;
                        position: relative;
                        top: -50%;
                        text-align: center;
                        font-family: Nunito;
                    }
                `}</style>
            </div>
        );
    }
}

export default Movie;