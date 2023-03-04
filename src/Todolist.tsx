import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValurType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    RemoveTasks: (id: string) => void
    ChangesFilter: (value: FilterValurType) => void
    AddTasks: (title:string) =>void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle ,SetNewTaskTitle] = useState("");
const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    SetNewTaskTitle(e.currentTarget.value)
}
const  onKeyPressHandler = (e:  KeyboardEvent<HTMLInputElement>) => {

        if ( e.ctrlKey &&  e.charCode === 13) {
            props.AddTasks(newTaskTitle)
            SetNewTaskTitle("")
        }
    }
    const addTask = () => {
        props.AddTasks(newTaskTitle)
        SetNewTaskTitle("")
    }
    const onAllClickHandler = () => { props.ChangesFilter("All")}
    const onActiveClickHandler = () => { props.ChangesFilter("Active")}
    const onCompletedClickHandler = () => { props.ChangesFilter("Completed")}




    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={ onNewTitleChangeHandler   }
                onKeyPress={ onKeyPressHandler }
                />
                <button onClick={ addTask } >+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        const onRemuveHandler = () => {
                            props.RemoveTasks(t.id)
                        }
                        return  <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onRemuveHandler}>x
                            </button>
                        </li>
                })
                }


            </ul>
            <div>
                <button onClick={onAllClickHandler}>All
                </button>
                <button onClick={onActiveClickHandler}>Active
                </button>
                <button onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    )
}