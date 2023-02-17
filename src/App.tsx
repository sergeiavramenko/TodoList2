import React, {useState} from 'react';

import './App.css';
import {TaskType, Todolist} from "./Todolist";
export   type FilterValurType = "Active" | "All" | "Completed";
function App() {
    let [tasks,setTasks] = useState<Array<TaskType>>([
        {id:1, title: "CSS", isDone: true},
        {id:2, title: "qwer", isDone: false},
        {id:3, title: "bms", isDone: true},
        {id:4, title: "qsdfdswer", isDone: false},
        {id:5, title: "bsdsewrewerms", isDone: true},
        {id:6, title: "CSS", isDone: true},
        {id:7, title: "qwer", isDone: false},
        {id:8, title: "bms", isDone: true},
        {id:9, title: "qsdfdswer", isDone: false},
        {id:10, title: "bsdsewrewerms", isDone: true}
    ]);

    let [filter, setFilter] = useState<FilterValurType>("All")
    let RemoveTasks = (id:number) => {
        let filteredTasks = tasks.filter( t =>   t.id !== id        )
        setTasks(filteredTasks)
    } ;


    let tasksForTodoList = tasks;
    if (filter == "Completed") {
        tasksForTodoList = tasks.filter( t=> t.isDone ===true  )
    }
    if (filter == "Active") {
        tasksForTodoList = tasks.filter( t=> t.isDone ===false )
    }
    let ChangesFilter = (value:FilterValurType) => {
        setFilter (value)

    }
    return <div className="App">

        <Todolist title="What to learn"
                  tasks={  tasksForTodoList}
                  RemoveTasks={RemoveTasks}
        ChangesFilter={ChangesFilter}/>



    </div>
}

export default App;
