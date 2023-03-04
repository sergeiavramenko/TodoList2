import React, {useState} from "react";

export const HOOK = () => {
    let [player1, setPlayer1] = useState(10);
    let [player2, setPlayer2] = useState(10);


    return <div>
        <div>
            <div>Ivan</div>
            <div>{player1}</div>
            <button onClick={() => {
                setPlayer1(a => a + 1)
            }}> +
            </button>
        </div>
        <hr/>
        <div>
            <div>Petr</div>
            <div>{player2}</div>
            <button onClick={() => {
                setPlayer2((a) => a + 1)
            }}> +
            </button>
        </div>
        <hr/>
        <button onClick={() => {
            setPlayer1(a => a - 1)
            setPlayer2(a => a - 1)
        }}>-
        </button>
        <button onClick={() => {
            setPlayer1(a => 10)
            setPlayer2(a => 10)
        }}>reset
        </button>


    </div>
}