import React, {useState} from "react";

export const HOOK2 = () => {
    let [counter, setCounter] = useState({
        c1:10,
        c2:10
    });


    return <div>
        <div>
            <div>Ivan</div>
            <div>{counter.c1}</div>
            <button onClick={() => {
                setCounter(  (a) => {
                    return {...a , c1: a.c1 +1}
                } )
            }}> +
            </button>
        </div>
        <hr/>
        <div>
            <div>Petr</div>
            <div>{counter.c2}</div>
            <button onClick={() => {
                setCounter(  (a) => {
                    return {...a , c2: a.c2 +1}
                } )
            }}> +
            </button>
        </div>
        <hr/>
        <button onClick={() => {
            setCounter( (a) => {
                return {...a , c2: a.c2 -1 , c1 : a.c1 -1}
            })

        }}>-
        </button>
        <button onClick={(a) => {
            setCounter( (a) => {
                return {...a , c2:10 , c1 : 10}
            })

        }}>reset
        </button>


    </div>
}