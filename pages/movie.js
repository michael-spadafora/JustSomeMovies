import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch'
import HeaderLayout from '../components/HeaderLayout'

export default class extends Component {
    // get the id from the link and pass it through to database query
    static async getInitialProps(context) {
        const {id} = context.query;
        const res = await fetch(`http://localhost:4000/m/${id}`);
        const movie = await res.json();
        return {movie};
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            movie: this.props.movie.movie
        })
    }

    render() {
        return (
            <div>
                <Head>
                    <title>{this.state.movie[0].title}</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
                </Head>
                <HeaderLayout head/>
                <div className="container">
                    <div className="moviePictureBox">
                        <img src={"https://image.tmdb.org/t/p/w500" + this.state.movie[0].poster_url} alt={this.state.movie[0].p_name} />
                    </div>
                    <div className="movieInfo">
                        <h2 className = "movieTitle">  
                            {this.state.movie[0].title}
                        </h2>
                        <div className="movieData">Overview: {this.state.movie[0].overview}</div>
                        <div className="movieData">Release Date: {this.state.movie[0].release_date}</div>
                        <div className="movieData">Runtime: {this.state.movie[0].gender}</div>
                    </div>
                <style jsx global> {`
                    body {
                        background-color: #f2f2f2;
                        font-family: Nunito;
                    }
                    .container {
                        margin: 120px auto 120px;
                        background-color: #fff;
                        padding: 0 20px 20px;
                        border-radius: 6px;
                        -webkit-border-radius: 6px;
                        -moz-border-radius: 6px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                        -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                    }
                    .moviePictureBox {
                        overflow: hidden;
                        height: 300px;
                        width: 210px;
                        position: relative;
                        -webkit-box-shadow: 0 0 0 5px #f2f2f2;
                        -moz-box-shadow: 0 0 0 5px #f2f2f2;
                    }
                    .moviePictureBox img {
                        width:210px;
                    }
                    .movieInfo {
                        position: relative;
                    }
                    .movieTitle {
                        font-size: 32px;
                        font-weight: 600;
                        margin-bottom: 15px;
                        color: #333;
                    }
                    .movieData {
                        font-size: 16px;
                        line-height: 26px;
                        margin-bottom: 20px;
                        color: #666;
                    }
                `}</style>
            </div>
        </div>
        )
    }
}
