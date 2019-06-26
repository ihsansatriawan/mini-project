import React from 'react';

import { connect } from 'react-redux';

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());


const SearchBar = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
  </div>

const Article = ({ article }) =>
  <a href={article.url}>{article.title}</a>

const Articles = ({ articles }) =>
  <ul>
    {articles.map(article =>
      <li key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>

const Search = ({ articles, searchTerm, onSearch }) => {
  return (<div>
    <SearchBar value={searchTerm} onSearch={onSearch}>
      <p>Search Me!</p>
    </SearchBar>

    <Articles articles={articles.filter(applyFilter(searchTerm))} />
  </div>)
}

const mapStateToProps = ({ articlesState, searchState }) => ({
  articles: articlesState.articles,
  searchTerm: searchState.searchTerm
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);