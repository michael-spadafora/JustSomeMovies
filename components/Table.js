import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import "isomorphic-fetch"

const moviesColumns = [
    { Header: 'Title', accessor: 'title',}, 
    { Header: 'Genres', accessor: 'genres'},
    { Header: 'Director', accessor: 'director' },
    { Header: 'Actors', accessor: 'actors'},
    { Header: 'Rating', accessor: 'rating'}
]

const actorsColumns = [ {Header: 'Name', accessor: 'name' } ]

const directorColumns = [{ Header: 'Name', accessor: 'name' } ]
class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            type: props.type,
            data:  [], 
        }
    }

    componentDidMount = () => {
        
        if (this.type === 'actor') {
            this.queryActor();

        }
        if (this.type === 'movie') {
            this.queryMovie();
        }
        if (this.type === 'director') {
            this.queryDirector();
        }

    }

    static getInitialProps({query}) {
        return {query}
    }

    queryActor = () => {
        fetch('http://localhost:4000/actors/' + this.props.query)
                  .then(response => response.json())
                  .then(response => this.setState({data: response.movies}))
                  .catch(err => console.error(err))
      }
      queryMovie = _ => {
        fetch('http://localhost:4000/movies/')
        .then(response => response.json())
        // .then(response => console.log(response.movies[1]))
        .then(response => this.setState({data: response.movies[1]}))
        .catch(err => console.error(err))
        
      }
      queryDirector = () => {
        fetch('http://localhost:4000/directors/' + this.props.query)
        .then(response => response.json())
        .then(response => this.setState({movies: response.movies}))
        .catch(err => console.error(err))
        
      }
    render() {
        let col = actorsColumns
        this.queryMovie();
        if (this.state.type === 'movie') {
            col = moviesColumns
            this.queryMovie();
        }
        if (this.state.type === 'director') {
            col = directorColumns
            this.queryMovie();
        }

        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={col}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}
                />
            </div>
        )

    }
}

export default App;