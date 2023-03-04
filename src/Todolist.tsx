import React, {useState} from "react";
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

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={ (e) => {
                    SetNewTaskTitle(e.currentTarget.value)
                }     }
                onKeyPress={ (e)=>{
                    if ( (e.ctrlKey &&  e.charCode === 13) || (e.altKey &&  e.charCode === 13)) {
                        props.AddTasks(newTaskTitle)
                        SetNewTaskTitle("")
                    }
                } }
                />
                <button onClick={ ()=>{ props.AddTasks(newTaskTitle)
                SetNewTaskTitle("")  }} >+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.RemoveTasks(t.id)
                            }}>x
                            </button>
                        </li>
                    )
                }


            </ul>
            <div>
                <button onClick={() => {
                    props.ChangesFilter("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.ChangesFilter("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.ChangesFilter("Completed")
                }}>Completed
                </button>
            </div>
        </div>
    )
}