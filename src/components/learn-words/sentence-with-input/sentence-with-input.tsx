import React from 'react';
import styles from './sentence-with-input.module.css';
import './styles.css'
import { CSSTransition } from 'react-transition-group';

interface Word {
  word: string, 
  correct: boolean,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  indexes: any,
  setIndexes: any,
  setIndex: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any
}

function SentenceWithInput({ word, correct, onCorrect, setUsersWord, usersWord, indexes, setIndexes, setIndex,
  inProp, setInProp, transpAnswer, setTranspAnswer }: Word){
    function checkWord(e: any) {
      setInProp(true)
      setTranspAnswer(false)
      if (e.keyCode === 13 && !correct) {
        let inputWord = usersWord.toLowerCase().trim()
        setIndexes([])
        if (inputWord === word) {
          onCorrect(true)
          setTranspAnswer(false)
        } else {
          if (inputWord.length !== word.length) {
            let indexes: any = []
            word.split('').map((el: string, i: number) => {
              if (el !== inputWord[i]) indexes.push(i)
            })
            setIndexes(indexes.concat(indexes))
            setInProp(false)
            setTranspAnswer(true)
          } else {
            let indexes: any = []
            inputWord.split('').map((el: string, i: number) => {
              if (el !== word[i]) indexes.push(i)
            })
            console.log(indexes)
            setIndexes(indexes.concat(indexes))
            setInProp(false)
            setTranspAnswer(true)
          }
        } 
        setUsersWord('')
      }
    }

    if (!word) return null

    return (
      <>
        <div className={styles.sentenceContainer}>
          <span className={styles.inputContainer}>
            <span className={styles.background}>
              {word.split('').map((el, i) => <span key={i} className={styles.hidden}>{el}</span>)}
            </span>
            
              <span className={styles.wordContainer}>
                {word.split('').map((el, i) => 
                  indexes.includes(i) ? 
                  <CSSTransition in={inProp} key={i} timeout={1500} classNames='my-node'>
                    <span className={styles.mistake}>{el}</span>
                  </CSSTransition> : 
                  <CSSTransition in={inProp} key={i} timeout={1500} classNames='my-node'>
                    <span className={styles.correct}>{el}</span>
                  </CSSTransition>
                )}
              </span>
              {transpAnswer && <span className={styles.transparentWordContainer}>
                {word.split('').map((el, i) => 
                  indexes.includes(i) ? 
                    <span key={i} className={styles.transparentMistake}>{el}</span> : 
                    <span key={i} className={styles.transparentCorrect}>{el}</span>
                )}
              </span>}
              {correct && <span className={styles.answerContainer}>
                {word.split('').map((el, i) => 
                    <span key={i} className={styles.transparentCorrect}>{el}</span>
                )}
              </span>}
            <input className={styles.answerInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
   setUsersWord(e.target.value)}} onKeyDown={(e: any) => checkWord(e)} type="text" name="" id="inputWord" value={usersWord}/>
            </span>
        </div>
      </>
    )
}

export default SentenceWithInput;