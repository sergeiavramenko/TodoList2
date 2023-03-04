import React, {useState} from "react";
import {UsersType} from "./App";



let findMax = (users: UsersType ) => {
    console.log('find')
    let maxPair = [0, 0];
    for ( let i = 0; i < users.length; i++ ) {
        if (Math.max(users[i][0], users[i][1] ) >    Math.max(maxPair[0], maxPair[1]   )) {
            maxPair = users[i];
        }
    }
    return maxPair;

}
export const HOOK = ({users}: {users: UsersType}) => {

    let [player1, setPlayer1] = useState(  () => {
        let pair = findMax(users)
        return  pair[0]  });
    let [player2, setPlayer2] = useState(() => {
        let pair = findMax(users)
        return  pair[1]});


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