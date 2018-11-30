import React, {Component} from 'react';
import Link from 'next/link'

class Person extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        }
    }
    componentDidMount() {
        this.getPersons();
    }

    getPersons = _ => {
        fetch('http://localhost:4000/persons')
            .then(response => response.json())
            .then(response => this.setState({persons: response.persons}))
            .catch(err => console.error(err))
    }

    renderPerson = ({p_id, p_name, img_url}) => {
        if(img_url!=null) {
            return <div key={p_id} className="personBox">
                <Link as={`/a/${p_id}`} href={`/actor?id=${p_id}`}><img className="image" src={"https://image.tmdb.org/t/p/w500" + img_url} alt={p_name} /></Link>
                <div className="imgText">{p_name}</div>
            </div>
        }
    }

    render() {
        const {persons} = this.state;
        return (
            <div className="container">
                {persons.map(this.renderPerson)}
                <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
                <style jsx global> {`
                    .container{
                        display: grid;
                        grid-gap: 1rem;
                        justify-content:center;
                        grid-template-columns:repeat(auto-fill,200px);
                    }
                    .image {
                        width: 200px;
                        border-radius:5px;
                        transition: all .2s ease-in-out;
                        overflow:hidden;
                    }
                    .personBox {
                        position:relative;
                        width:200px;
                        height:280px;
                        margin-top:1rem;
                    }
                    .personBox img {
                        display:block;
                    }
                    .personBox:hover > .imgText {
                        opacity:1;
                        cursor:pointer;
                    }
                    .personBox:hover > img {
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

export default Person;