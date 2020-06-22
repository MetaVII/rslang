import React from 'react';
import styles from './adaptive.module.css';

function Adaptive() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Adaptive design</h2>
      <p className={styles.text}>You can improve your skills</p>
      <p className={styles.text}>anywhere & anywhen</p>
    </div>
  );
}

export default Adaptive;
