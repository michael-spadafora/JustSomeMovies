import React, {Component} from 'react';

class Person extends Component {

    state = {
        movies: []
    }
    componentDidMount() {
        this.getMovies();
    }

    getMovies = _ => {
        fetch('http://localhost:4000/movies')
            .then(response => response.json())
            .then(response => this.setState({movies: response.movies}))
            .catch(err => console.error(err))
    }
    renderMovie = ({movie_id, title}) => <div key={movie_id}>{title}</div>

    render() {
        const {movies} = this.state;
        return (
            <div>
                {movies.map(this.renderMovie)}
            </div>
        );
    }
}
    /*const Person = () => (
        <div className="container">
            <div className="personPicture">
                <img src="https://m.media-amazon.com/images/M/MV5BODEwMjkzNDIzOV5BMl5BanBnXkFtZTgwOTQ4NTU0NzE@._V1_UX214_CR0,0,214,317_AL_.jpg"/>
            </div>
            <div className="personInfo">
                <h2 className = "personName">
                    Rami Malek
                </h2>
                <p>About: Actor / Director </p>
                <p>Date of Birth: May 12, 1981</p>
            </div>
            <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
            <style jsx global> {`
                body {
                    background-color: #f0f0f0;
                    font-family: Nunito;
                }
                .container {
                    width: 300px;
                    margin: 120px auto 120px;
                    background-color: #fff;
                    padding: 0 20px 20px;
                    border-radius: 6px;
                    -webkit-border-radius: 6px;
                    -moz-border-radius: 6px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                    -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                    text-align: center;
                }
                .closeX {
                    text-align:right;
                    padding-top:10px;
                }
                .personPicture {
                    overflow: hidden;
                    height: 300px;
                    width: 210px;
                    position: relative;
                    margin: auto;
                    top: -80px;
                    -webkit-box-shadow: 0 0 0 5px #f0f0f0;
                    -moz-box-shadow: 0 0 0 5px #f0f0f0;
                }
                .personPicture img {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .personInfo {
                    position: relative;
                    top:-80px;
                }
                h2 {
                    font-size: 32px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    color: #333;
                }
                p {
                    font-size: 16px;
                    line-height: 26px;
                    margin-bottom: 20px;
                    color: #666;
                }
            `}</style>
        </div>
    )
}*/
export default Person;