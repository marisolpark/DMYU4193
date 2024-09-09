// This is where the "Magic happens" --> This is the top of the tree
//Import react and reactDOM libraries for use --> bc we have imported this here, we do 
// NOT have to import it at the top of all of the other files
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import our main parent component
import App from './App';
// import Pancake from ''

// Grab and store our root div element as a var
const root = ReactDOM.createRoot(document.getElementById('root'));
// Use react dom to render our react project inside the div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);