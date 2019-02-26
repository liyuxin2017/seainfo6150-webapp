import React, { Component } from 'react';
import articles from './data/articles.json';
import IndexPage from './ArticleList/IndexPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage
          articles={articles}
        />
      </div>
    );
  }
}

export default App;
