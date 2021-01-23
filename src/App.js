import React from 'react';
import Frontpage from './components/Frontpage';
import FilteredQuotes from './components/FilteredQuotes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <h1>Random Quote Website</h1>
        <Route exact path="/">
          <Frontpage />
        </Route>
        <Route path="/filter">
          <FilteredQuotes />
        </Route>
      </Router>
    </div>
  );
}

export default App;
