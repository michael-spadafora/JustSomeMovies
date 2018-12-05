//what we want here:
//select * from actors
//sort by name, age, salary etc dropdown menu
//
import React, {Component} from 'react';
import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import SortByActor from '../components/SortByActor'
import Actor from '../components/Actor'
import Head from 'next/head';

export default class actorsCopy extends Component {

    static async getInitialProps(context) {
        // console.log(context.query)
        const sortBy = context.query.sortBy;
        return {sortBy}
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            sortBy: this.props.sortBy
        })
    }

    render() {

        return (
            <div>
                <Head>
                    <title>Actors</title>
                    <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet" />
                </Head>
                <HeaderLayout head />
                <div style={{ display: "inline-block", fontSize: "23pt", fontWeight: "bold", paddingLeft: "10px", marginTop: "10px" }}>
                    Actors
                </div>
                <div style={{ marginTop: "10px", float: "right" }}> <SortByActor /> </div>
                <Actor sortBy = {this.state.sortBy} />
                <style jsx>{`
            body{
                background-color: #f2f2f2;
            }
            div {
                font-family:Nunito; 
            }
        `}</style>
            </div>
        )
    }
}
