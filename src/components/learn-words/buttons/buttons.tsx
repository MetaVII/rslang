import React from 'react';
import styles from './buttons.module.css';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { HistoryOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

interface ButtonsProps {
    word: any, 
    onCorrect: any,
    setUsersWord: any,
    usersWord: string,
    correct: boolean,
    setIndexes: any,
    setIndex: any,
    audioWord: any,
    audioExample: any,
    audioMeaning: any,
    inProp: boolean,
    setInProp: any,
    transpAnswer: boolean,
    setTranspAnswer: any
}
  
function Buttons({ word, onCorrect, setUsersWord, usersWord, correct, setIndexes, setIndex, 
    audioWord, audioExample, audioMeaning, inProp, setInProp, transpAnswer, setTranspAnswer }: ButtonsProps) {
    function onChange(checked: boolean) {
        console.log(`switch to ${checked}`);
    }

    function checkWord() {
        if (!correct) {
            const curWord = word.word
            let inputWord = usersWord.toLowerCase().trim()
            setIndexes([])
            if (inputWord === curWord) {
              onCorrect(true)
              setTranspAnswer(false)
            } else {
              if (inputWord.length !== curWord.length) {
                console.log('false')
                let indexes: any = []
                curWord.split('').map((el: string, i: number) => {
                  if (el !== inputWord[i]) indexes.push(i)
                })
                setIndexes(indexes.concat(indexes))
                setInProp(false)
                setTranspAnswer(true)
              } else {
                let indexes: any = []
                inputWord.split('').map((el: string, i: number) => {
                  if (el !== curWord[i]) indexes.push(i)
                })
                setIndexes(indexes.concat(indexes))
                setInProp(false)
                setTranspAnswer(true)
              }
            } 
            setUsersWord('')    
        }
    }  

    function difficultyButtonClick() {
        setIndex(); 
        onCorrect(false)
        setUsersWord('')
    }

    function showResultsClick() {
        setUsersWord(word.word)
        onCorrect(true)
    }

    return (
        <>
            <div className={styles.buttonsContainer}>
                {correct ?                 
                <>
                    <div className={styles.buttonsInfo}>Indicate difficulty level</div>
                    <div className={styles.levelButtons}>
                        <Button onClick={() => difficultyButtonClick()} className={styles.buttonHard} >Hard</Button>
                        <Button onClick={() => difficultyButtonClick()} className={styles.buttonNormal}>Normal</Button>
                        <Button onClick={() => difficultyButtonClick()} className={styles.buttonEasy} >Easy</Button>
                    </div>
                    <Button type="primary" icon={<HistoryOutlined />} size="large" shape="circle"></Button>
                </> :                 
                <>
                    <Button onClick={() => checkWord()} type="primary" icon={<CheckOutlined />} size="large" shape="circle" 
                    style={{width: '50px', height: '50px', marginBottom: '12px'}}>
                    </Button>
                    <div>
                        <button
                            className={styles.showResults}
                            type="button"
                            onClick={() => showResultsClick()}>
                            Show Results
                        </button>
                    </div>
                </>}
            </div>
            <div className={styles.switchContainer}>
                <div>
                    <Switch onChange={onChange} />
                    <span>Only new words</span>
                </div>
                <div>
                    <Switch defaultChecked onChange={onChange} />
                    <span>All words</span>
                </div>
                <div>
                    <Switch onChange={onChange} />
                    <span>Difficult words</span>
                </div>
            </div>
        </>
    )
}

export default Buttons;