import React from 'react';

const Article = ({title, date, author, children}) => {
  return (
    <Article>
      <h1 id = 'title'>{title}</h1>
      <h2 id = 'author'><address>{author}</address></h2>
      <h3 id = 'date'><time>{date}</time></h3>
      <hr/>
      {children}
    </Article>
  );
};

export default Article;
