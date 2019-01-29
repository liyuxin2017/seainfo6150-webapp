import React from 'react';

const Article = ({title, date, author, children}) => {
  return (
    <div>
      <h1 id = 'title'>{title}</h1>
      <h2 id = 'author'>{author}</h2>
      <h3 id = 'date'>{date}</h3>
      <hr/>
      {children}
    </div>
  );
};

export default Article;
