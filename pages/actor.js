import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch'
import HeaderLayout from '../components/HeaderLayout'

export default class extends Component {
    // get the id from the link and pass it through to database query
    static async getInitialProps(context) {
        const {id} = context.query;
        const res = await fetch(`http://localhost:4000/a/${id}`);
        const actor = await res.json();
        return {actor};
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            actor: this.props.actor.actor
        })
    }

    render() {
        return (
            <div>
                <HeaderLayout head/>
                <div className="container">
                    <div className="personPictureBox">
                        <img src={"https://image.tmdb.org/t/p/w500" + this.state.actor[0].img_url} alt={this.state.actor[0].p_name} />
                    </div>
                    <div className="personInfo">
                        <h2 className = "personName">  
                            {this.state.actor[0].p_name}
                        </h2>
                        <div className="personData">Date of Birth: {this.state.actor[0].dob}</div>
                        <div className="personData">Gender: {this.state.actor[0].gender}</div>
                    </div>
                <style jsx global> {`
                    body {
                        background-color: #f0f0f0;
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
                    .personPictureBox {
                        overflow: hidden;
                        height: 300px;
                        width: 210px;
                        position: relative;
                        -webkit-box-shadow: 0 0 0 5px #f0f0f0;
                        -moz-box-shadow: 0 0 0 5px #f0f0f0;
                    }
                    .personPictureBox img {
                        width:210px;
                    }
                    .personInfo {
                        position: relative;
                    }
                    .personName {
                        font-size: 32px;
                        font-weight: 600;
                        margin-bottom: 15px;
                        color: #333;
                    }
                    .personData {
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
