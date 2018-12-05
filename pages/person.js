import React, {Component} from 'react';
import HeaderLayout from '../components/HeaderLayout';
import Link from 'next/link';
import Head from 'next/head';

export default class extends Component {
    // get the id from the link and pass it through to database query
    static async getInitialProps(context) {
        const {id} = context.query;
        const res = await fetch(`http://localhost:4000/p/${id}`);
        const data = await res.json();
        return {data};
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            person: this.props.data
        })
    }

    renderMovies = ({movie_id,title,poster_url,actor_role,director_id,producer_id}) => {
        if(actor_role != null && director_id != null && producer_id != null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Director, Producer, {actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(actor_role != null && director_id != null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Director, {actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(actor_role!=null && producer_id!=null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Producer, {actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(director_id!=null && producer_id!=null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Director, Producer</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(actor_role != null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>{actor_role}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(director_id != null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Director</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        else if(producer_id != null) {
            return (
                <div key={movie_id} className="card">
                    <Link as={`/m/${movie_id}`} href={`/movie?id=${movie_id}`}>
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + poster_url} alt={title} style={{width:'100%'}}/>
                            <div className="card-body">
                                <h3>{title}</h3>
                                <p>Producer</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    renderPersonInfo = ({p_id,p_name,img_url,gender,dob}) => {
        if(img_url != null) {
            return (
                <div key={p_id}>
                    <div className="personPictureBox">
                        <img src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} />
                    </div>
                    <div className="personInfo">
                        <div className = "personName">  
                            {p_name}
                        </div>
                        <div className="personDataHeader">Date of Birth</div>{dob!=null && <div className="personData">{dob}</div>}{dob==null && <div className="personData">-</div>}
                        <div className="personDataHeader">Gender</div>{gender!="" && <div className="personData">{gender}</div>}{gender=="" && <div className="personData">-</div>}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div key={p_id}>
                    <div className="personPictureBox"></div>
                    <div className="personInfo">
                        <div className = "personName">  
                            {p_name}
                        </div>
                        <div className="personDataHeader">Date of Birth</div>{dob!=null && <div className="personData">{dob}</div>}{dob==null && <div className="personData">-</div>}
                        <div className="personDataHeader">Gender</div>{gender!="" && <div className="personData">{gender}</div>}{gender=="" && <div className="personData">-</div>}
                    </div>
                </div>
            )
        }
    }

    render() {
        console.log(this.state.person);
        return (
            <div>
                <Head>
                    <title>{this.state.person.person[0].p_name}</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
                </Head>
                <HeaderLayout head/>
                <div className="container">
                    {this.state.person.person.map(this.renderPersonInfo)}
                    <div>
                        <h1>Movies</h1>
                        {this.state.person.all != null && this.state.person.all.map(this.renderMovies)}
                        {this.state.person.actDirect != null && this.state.person.actDirect.map(this.renderMovies)}
                        {this.state.person.actProduce != null && this.state.person.actProduce.map(this.renderMovies)}
                        {this.state.person.directProduce != null && this.state.person.directProduce.map(this.renderMovies)}
                        {this.state.person.actor != null && this.state.person.actor.map(this.renderMovies)}
                        {this.state.person.director != null && this.state.person.director.map(this.renderMovies)}
                        {this.state.person.producer != null && this.state.person.producer.map(this.renderMovies)}
                    </div>
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
                        top:-120px;
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
                    .personPictureBox {
                        overflow: hidden;
                        height: 360px;
                        width: 250px;
                        position: relative;
                        -webkit-box-shadow: 0 0 0 5px #f2f2f2;
                        -moz-box-shadow: 0 0 0 5px #f2f2f2;
                        border-radius: 5px;
                        float:left;
                        margin-right:20px;
                        margin-bottom:20px;
                    }
                    .personPictureBox img {
                        width:250px;
                    }
                    .personInfo {
                        height: 360px;
                    }
                    .personName {
                        font-size: 32px;
                        margin-bottom: 15px;
                        font-weight:bolder;
                    }
                    .personData {
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                    .personDataHeader {
                        font-size:20px;
                        font-weight:bold;
                    }
                `}</style>
            </div>
        </div>
        )
    }
}
