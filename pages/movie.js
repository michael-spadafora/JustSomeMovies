import React, {Component} from 'react';
<<<<<<< HEAD
=======
// import fetch from 'isomorphic-unfetch';
>>>>>>> 1735fe664a31b7c5e27adbfc2baf0aef2988cd0e
import HeaderLayout from '../components/HeaderLayout';
import Link from 'next/link';
import Head from 'next/head';

export default class extends Component {
    // get the id from the link and pass it through to database query
    static async getInitialProps(context) {
        const {id} = context.query;
        const res = await fetch(`http://localhost:4000/m/${id}`);
        const data = await res.json();
        return {data};
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            movie: this.props.data
        })
    }

    renderActors = ({p_id, p_name, img_url, actor_role}) => {
        if(img_url!=null) {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>{actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>{actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    renderDirectors = ({p_id, p_name, img_url}) => {
        if(img_url!=null) {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>Director</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>Director</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    renderProducers = ({p_id, p_name, img_url}) => {
        if(img_url!=null) {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>Producer</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>Producer</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    renderCrew = ({p_id, p_name, img_url, member_role}) => {
        if(img_url!=null) {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>{member_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <div key={p_id} className="card">
                    <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}>
                        <div>
                            <div className="cardimg">
                                <img src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"} alt={p_name} style={{width:'100%'}}/>
                            </div>
                            <div className="card-body">
                                <h3>{p_name}</h3>
                                <p>{member_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    renderDistributors = ({dist_name,dist_id}) => {
        return (
            <div key={dist_id} className="movieCompanies">
                <div>{dist_name}</div>
            </div>
        )
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <Head>
                    <title>{this.state.movie.movie[0].title}</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
                </Head>
                <HeaderLayout head/>
                <div className="container">
                    <div className="moviePictureBox">
                        <img src={"https://image.tmdb.org/t/p/w500" + this.state.movie.movie[0].poster_url} alt={this.state.movie.movie[0].p_name} />
                    </div>
                    <div className="movieInfo">
                        <div className = "movieTitle">  
                            {this.state.movie.movie[0].title}
                        </div>
                        <div className="movieDataHeader">Overview</div><div className="movieData">{this.state.movie.movie[0].overview}</div>
                        <div className="movieDataHeader">Release Date</div><div className="movieData">{this.state.movie.movie[0].release_date}</div>
                        <div className="movieDataHeader">Runtime</div><div className="movieData">{this.state.movie.movie[0].runtime}</div>
                        <div className="movieDataHeader">Genres</div><div className="movieData">{this.state.movie.genres[0].genres}</div>
                        <div className="movieDataHeader">Production Companies</div>
                        <div className="movieData">{this.state.movie.distributors.map(this.renderDistributors)}</div>
                    </div>
                    <h1>Actors</h1>
                    {this.state.movie.actors.map(this.renderActors)}
                    <h1>Directors</h1>
                    {this.state.movie.directors.map(this.renderDirectors)}
                    <h1>Producers</h1>
                    {this.state.movie.producers.map(this.renderProducers)}
                    <h1>Crew</h1>
                    {this.state.movie.crew.map(this.renderCrew)}
                <style jsx global> {`
                    .card {
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        transition: 0.3s;
                        width:210px;
                        height: 350px;
                        overflow:hidden;
                        margin-right:20px;
                        margin-bottom:20px;
                        display:inline-block;
                        position:relative;
                        z-index:1;
                    }
                    .cardimg {
                        height:350px;
                    }
                    .card img {
                        width:210px;
                        postion:absolute;
                    }
                    .card:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                        cursor:pointer;
                    }
                    .card-body {
                        padding:5px 10px;
                        position:relative;
                        top:-130px;
                        height:200px;
                        background-color:white;
                        z-index:3;
                    }
                    .card:hover img {
                        transform:scale(1.03);
                    }
                    body {
                        background-color: #f2f2f2;
                        font-family: Nunito;
                    }
                    .container {
                        margin: 20px auto 20px;
                        background-color: #fff;
                        padding: 20px 20px 20px;
                        border-radius: 6px;
                        -webkit-border-radius: 6px;
                        -moz-border-radius: 6px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                        -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                    }
                    .moviePictureBox {
                        overflow: hidden;
                        height: 360px;
                        width: 250px;
                        -webkit-box-shadow: 0 0 0 5px #f2f2f2;
                        -moz-box-shadow: 0 0 0 5px #f2f2f2;
                        border-radius: 5px;
                        float:left;
                        margin-right:20px;
                    }
                    .movieInfo {
                        margin-left:270px;
                    }
                    .moviePictureBox img {
                        width:250px;
                    }
                    .movieTitle {
                        font-size: 32px;
                        margin-bottom: 15px;
                        font-weight:bolder;
                    }
                    .movieData {
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                    .movieDataHeader {
                        font-size:20px;
                        font-weight:bold;
                    }
                    .movieCompanies {
                        display:inline-block;
                        vertical-align:top;
                        margin-right:20px;
                    }
                `}</style>
            </div>
        </div>
        )
    }
}
