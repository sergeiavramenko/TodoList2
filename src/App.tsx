import React, {useState} from 'react';
import {v1} from 'uuid'
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {HOOK} from "./HOOK";

export   type FilterValurType = "Active" | "All" | "Completed";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "qwer", isDone: false},
        {id: v1(), title: "bms", isDone: true},
        {id: v1(), title: "qsdfdswer", isDone: false},
        {id: v1(), title: "bsdsewrewerms", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "qwer", isDone: false},
        {id: v1(), title: "bms", isDone: true},
        {id: v1(), title: "qsdfdswer", isDone: false},
        {id: v1(), title: "bsdsewrewerms", isDone: true}
    ]);
    console.log(tasks)

    let [filter, setFilter] = useState<FilterValurType>("All")
    let RemoveTasks = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    };

    let AddTasks = (title:string) => {
        let newTasks = [
            {id: v1(), title: title, isDone: false},
            ...tasks]
        setTasks(newTasks)
    }


    let tasksForTodoList = tasks;
    if (filter == "Completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter == "Active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    let ChangesFilter = (value: FilterValurType) => {
        setFilter(value)

    }
    return <div className="App">

        <Todolist title="What to learn"
                  tasks={tasksForTodoList}
                  RemoveTasks={RemoveTasks}
                  ChangesFilter={ChangesFilter}
                  AddTasks={AddTasks}/>
        <HOOK />


    </div>
}

export default App;
