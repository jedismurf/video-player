import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeAPISearch from 'youtube-api-search';
import SearchBar from  './components/search_bar';
import GOOGLE_API_KEY from './api/google_api';

// Create a new component. Component contains the HTML template.

const App = () => { 
    return(
        <div>
            <h1>Hello World</h1>
            <SearchBar />
        </div>
    ); 
};

// Tell this components HTML template and add it to the DOM.
ReactDOM.render(<App />, document.querySelector(".container"));