import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchRoute from './pages/Search';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {

  return (
    <div className="App">
      <Router>
        <div id="navbar"> 
          <ul> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul> 
        </div>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/search" component={SearchRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
