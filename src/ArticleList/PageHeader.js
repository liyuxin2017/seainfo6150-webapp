import React from 'react';
import styles from './PageHeader.module.css';

function PageHeader (props) {
  const hearderText = "The INFO6150 News";
  const date = new Date();
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const today = weekday[date.getDay()] + ", " + month[date.getMonth()]
  + " " + date.getDate() + ", " + date.getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.text}>{hearderText}</div>
      <div className={styles.date}><time>{today}</time></div>
    </div>
  )
}

export default PageHeader;
