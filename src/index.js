import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from  './components/search_bar';
import VideoList from './components/video_list';
import { GOOGLE_API_KEY } from './api/google_api';

// Create a new component. Component contains the HTML template.



class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YouTubeSearch({ key: GOOGLE_API_KEY, term: 'ghosts' }, videos => {
            this.setState({ videos })
        });
    }

    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <SearchBar />
                <div className="col-md-8">
                </div>
                <VideoList videos={ this.state.videos } />
            </div> 
        );
    }
};

// Tell this components HTML template and add it to the DOM.
ReactDOM.render(<App />, document.querySelector(".container"));