import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import styles from './to-do-action.module.css';
import { ReactComponent as ToDoActionImage } from '../../../img/layer-2-main-page.svg';

function ToDoAction() {
  const history = useHistory();

  const gameArray = ['/mini-games/speakit', '/mini-games/savannah', '/mini-games/puzzle', '/mini-games/sprint', '/mini-games/memory-game', '/mini-games/audio-call'];

  function randomGameClick() {
    const rand = Math.floor(Math.random() * gameArray.length);
    console.log(gameArray[rand]);
    history.push(gameArray[rand]);
  }

  return (
    <div className={styles.actions_container}>
      <div className={styles.btn_container}>
        <Button onClick={() => { history.push('/statistic'); }} className={`${styles.btn_default} ${styles.btn}`} shape="round" value="large">See statistic</Button>
        <Button onClick={() => randomGameClick()} className={styles.btn} type="primary" shape="round" value="large">Play Random Game</Button>
        <Button onClick={() => { history.push('/learn-words'); }} className={`${styles.btn_default} ${styles.btn}`} shape="round" value="large">Start learning words</Button>
      </div>
      <ToDoActionImage />
    </div>
  );
}

export default ToDoAction;
