import React from "react";
import {FilterValurType} from "./App";

export type TaskType ={
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    RemoveTasks: (id:number)  =>void
    ChangesFilter: (value:FilterValurType)  =>void
}
export function  Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input placeholder="IT-Camasutra" />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( t=> <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {props.RemoveTasks(t.id)} }>x</button></li>
                    )
                }





            </ul>
            <div>
                <button onClick={ () => {props.ChangesFilter("All")}  }>All</button>
                <button  onClick={ () => {props.ChangesFilter("Active")}  }>Active</button>
                <button  onClick={ () => {props.ChangesFilter("Completed")}  }>Completed</button>
            </div>
        </div>
    )
}