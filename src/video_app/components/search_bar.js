import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: 'react tutorial' };
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.onSearchTermChange(this.state.term)
        }
    }

    render() {
        return (
            <div className="search-bar">

                <input
                    value={this.state.term}
                    onKeyPress={event => this.handleKeyPress(event) }
                    onChange={event => this.setState( { term: event.target.value } ) }
                />
                <button
                    onClick={() => {
                          this.props.onSearchTermChange(this.state.term)
                        }
                    }
                    type="button"
                    className="btn btn-success">
                    <span className="glyphicon glyphicon-search"></span>
                    Search
                </button>
                <p>
                    Value of input: {this.state.term}
                </p>
            </div>
        );
    }


}

export default SearchBar;