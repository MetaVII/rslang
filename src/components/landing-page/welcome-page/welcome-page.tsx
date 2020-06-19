import React from 'react';
import styles from './welcome-page.module.css';
import { ReactComponent as Logo } from '../../../img/logo.svg';
import { ReactComponent as Gradient } from '../../../img/gradient.svg';
import { ReactComponent as WelcomeImage } from '../../../img/layer-2.svg';

function WelcomePage() {
  return (
    <div className={styles.container}>
      <h1>
        <Logo />
        <span className={styles.logo}>RS LANG</span>
      </h1>
      <p className={styles.title}>
        App for learning English
      </p>
      <p className={styles.text}>with interval repetition and mini-games</p>
      <button type="button" className={styles.button}>Get Started</button>
      <Gradient className={styles.gradient} />
      <WelcomeImage className={styles.image} />
    </div>
  );
}

export default WelcomePage;
