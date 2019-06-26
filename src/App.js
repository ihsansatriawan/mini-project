import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import SearchRoute from './pages/Search';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App({ articles, searchTerm, onSearch }) {
  console.log("articles: ", articles);
  console.log("searchTerm: ", searchTerm);
  console.log("onSearch: ", onSearch);

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

const mapStateToProps = ({ articlesState, searchState }) => ({
  articles: articlesState.articles,
  searchTerm: searchState.searchTerm
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
