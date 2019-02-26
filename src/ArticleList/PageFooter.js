import React from 'react';
import styles from './PageFooter.module.css';

function PageFooter (props) {
  const footerText = "© 2019, Yuxin Li";
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {footerText}
      </div>
    </div>
  )
}

export default PageFooter;
