import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Link from 'next/link'
import { O_WRONLY } from 'constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fetch = require("node-fetch");

const moviesColumns = [{
    Header: 'Link',
    accessor: 'movie_id',
    Cell: (row) => (<Link as =  {"/m/" + row.value} href={`/movie?id=` + row.value} width='10px'> View Page  </Link>),
    maxWidth: 100 
},{
    Header: 'Name',
    accessor: 'title',
  }, {
    Header: 'Genres',
    accessor: 'genres'
  }, {
    Header: 'Director',
    accessor: 'director'
  }, {
    Header: 'Actors',
    accessor: 'actors'
  }, {
      Header: 'Rating',
      accessor: 'rating'
  }]

const actorsColumns = [{
    Header: 'Link',
    accessor: 'p_id',
    Cell: (row) => (<Link as =  {"/a/" + row.value} href={`/actor?id=` + row.value} width='10px'> View Page  </Link>),
    maxWidth: 100 
    }, {
    Header: 'Name',
    accessor: 'p_name'
    // Cell: (row) => (<Link href={`/actor?id=` + row.p_id}> {row.p_name} </Link>)
  },
  {
      Header: 'Gender',
      accessor: 'gender'
  }
]

const directorColumns = [{
    Header: 'Name',
    accessor: 'name'
  }]
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: props.type,
            query: props.query
        }
    }

    componentWillMount() {
        if (this.state.type === 'movie') {
            this.getMovies();
        }
    
        if (this.state.type === 'actor') {
            this.getActors();
        }
        if (this.state.type === 'director') {
            this.getMovies();
        }
    }

    componentDidMount() {
        
    }

    getMovies = _ => {
        // Gets the data from the server and converts the json to state value.
        // Check server.js for documentation on data routing
        fetch('http://localhost:4000/search/m/?query=' + this.state.query)
            .then(response => response.json())
            .then(response => this.setState({data: response.movies}))
            .catch(err => console.error(err))
    }

    getActors = _ => {
        // Gets the data from the server and converts the json to state value.
        // Check server.js for documentation on data routing
        fetch('http://localhost:4000/search/p/?query=' + this.state.query)
            .then(response => response.json())
            .then(response => this.setState({data: response.movies}))
            .catch(err => console.error(err))
    }

    render() {
        let col = actorsColumns
        if (this.state.type === 'movie') {
            col = moviesColumns
        }
        if (this.state.type === 'director') {
            col = directorColumns
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