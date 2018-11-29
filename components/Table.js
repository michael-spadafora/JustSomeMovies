import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

const moviesColumns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Age',
    accessor: 'age'
  }]

const actorsColumns = {

}

const directorColumns = {

}
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: props.type
        }
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
                    data={this.props.data}
                    columns={col}
                    defaultPageSize={3}
                    pageSizeOptions={[3, 6]}
                />
            </div>
        )

    }
}

export default App;