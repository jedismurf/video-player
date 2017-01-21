import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }

    render() {
        return(
            <div>
                <input onChange={event => this.setState({ term : event.target.value })}  />
                <h4>Input Text: { this.state.term }</h4>
            </div>
        );
    }
}