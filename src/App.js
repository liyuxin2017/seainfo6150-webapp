import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Article from './Article';
import MarkedUpArticle from './MarkedUpArticle';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
          <Article
            title = "The Statue of Liberty's torch heads to new museum"
            date = "November 22, 2018"
            author = "Kate Farley">
            <MarkedUpArticle/>
          </Article>
=======
import List from './List';
import AddingMachine from './AddingMachine';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleTable articles={articles} />
>>>>>>> 7fe78b595b740273d50e2c87b3b15ea60ef2e2c9
      </div>
    );
  }
}

export default App;
