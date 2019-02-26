import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import PageHeader from './PageHeader';
import styles from './IndexPage.module.css';
import PageFooter from './PageFooter';

const IndexPage = ({ articles }) => (
  <div className={styles.container}>
    <PageHeader />
    <ArticleList articles={articles} />
    <PageFooter />
  </div>
);

IndexPage.propTypes = {
  articles: PropTypes.object.isRequired
}

export default IndexPage;
