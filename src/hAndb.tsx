import styles from './styles/index.module.css'
import React, { useState } from 'react'

const answer: string = makeAnswer(Math.floor(Math.random() * 100000));

export default function Game() {
    const [guessNumber, setGuessNumber] = useState("");
    return (
        <div className={styles.page}>
            <h3>Hit&Blow</h3>
            <p>↓５桁の数字を当ててね↓</p>
            <p>　{guessNumber}　</p>
            <input type="button" value={0} onClick={() => setGuessNumber(guessNumber + "0")} />
            <input type="button" value={1} onClick={() => setGuessNumber(guessNumber + "1")} />
            <input type="button" value={2} onClick={() => setGuessNumber(guessNumber + "2")} />
            <input type="button" value={3} onClick={() => setGuessNumber(guessNumber + "3")} />
            <input type="button" value={4} onClick={() => setGuessNumber(guessNumber + "4")} />
            <input type="button" value={5} onClick={() => setGuessNumber(guessNumber + "5")} />
            <input type="button" value={6} onClick={() => setGuessNumber(guessNumber + "6")} />
            <input type="button" value={7} onClick={() => setGuessNumber(guessNumber + "7")} />
            <input type="button" value={8} onClick={() => setGuessNumber(guessNumber + "8")} />
            <input type="button" value={9} onClick={() => setGuessNumber(guessNumber + "9")} />
            <input type="button" value="clear" onClick={() => setGuessNumber("")} />
            <input type="button" value="delete" onClick={() => setGuessNumber(guessNumber.slice( 0 , guessNumber.length -1 ))} />
            <br />
            <SubmitButtonJudge answer={answer} guessNumber={guessNumber} />
            <a href="https://nakayou.vercel.app">作者のサイト</a>
            <br />
            <a href="https://github.com/NakaYou/HitAndBlowReact">コード</a>
        </div>
    )
}

export function SubmitButtonJudge(props: any) {
    const [player, changePlayer] = useState(false);
    const [hit, setHit] = useState(0);
    const [blow, setBlow] = useState(0);
    const [text,setText] = useState("プレイヤー1のターンです")
    var h: number = 0, b: number = 0;
    var playerturn: string;
    playerturn = player ? "1" : "2";
    for (var i = 0; i < 5; i++) {
        if (props.answer[i] === props.guessNumber[i]) {
            h++;
        }
        else {
            for (var j = 0; j < 5; j++) {
                if (i !== j && props.answer[i] === props.guessNumber[j]) {
                    b++;
                }
            }
        }
    }
    return (
        <>
            <input type="button" name="submit" value="submit!" onClick={() => { changePlayer(!player); setHit(h); setBlow(b);setText("プレイヤー"+playerturn+"のターンです") }} />
            <br />
            <h3>Hit:{hit} Blow:{blow}</h3>
            <p>{hit===5?"プレイヤー"+playerturn+"の勝利です":text}</p>
        </>
    )
}

function makeAnswer(random: number): string {
    var stringAnswer = String(random);
    for (; stringAnswer.length < 5;) {
        stringAnswer = "0" + stringAnswer;
    }
    return stringAnswer;
}