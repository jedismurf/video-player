import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from  './components/search_bar';
import VideoMain from './components/video_main';
import VideoList from './components/video_list';
import { GOOGLE_API_KEY } from './api/google_api';

// Create a new component. Component contains the HTML template.



class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('ouija gone wrong');
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            <div>
                <h1>Hello World</h1>
                <div className="row">
                    <SearchBar onSearchTermChange={ videoSearch } />
                </div>
                <div className="row">
                    <VideoMain video={ this.state.selectedVideo } />
                    <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo })} videos={ this.state.videos } />
                </div>
            </div> 
        );
    }

    videoSearch(term) {
        YouTubeSearch({ key: GOOGLE_API_KEY, term: term }, videos => {
            this.setState({ videos, selectedVideo: videos[0] })
        });
    }
};

// Tell this components HTML template and add it to the DOM.
ReactDOM.render(<App />, document.querySelector(".container"));