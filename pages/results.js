import React, {Component} from 'react';
// import fetch from 'isomorphic-unfetch';
import HeaderLayout from '../components/HeaderLayout';
import Link from 'next/link';
import Head from 'next/head';
import Table from '../components/Table'


export default class extends Component {
    // get the id from the link and pass it through to database query
    static async getInitialProps(context) {
        // console.log(context.query)
        const {query} = context.query;
        return {query}
    }

    // set the state to the value retrieved from query
    componentWillMount() {
        this.setState({
            data: this.props.query
        })
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <HeaderLayout head/>
                <Table  type = {'movie'} query = {this.state.data}/>   
                <Table  type = {'actor'} query = {this.state.data} />    
                <Table  type = {'director'} query = {this.state.data}/>    
            </div>
        )
    }
}
