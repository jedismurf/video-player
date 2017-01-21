import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. Component contains the HTML template.

const App = () => <div><h1>Hello World</h1></div>

// Tell this components HTML template and add it to the DOM.
ReactDOM.render(<App />, document.querySelector(".container"));