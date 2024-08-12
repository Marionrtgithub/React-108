import React, {useState} from "react";
function TaskList(){

    const [Task, setTask] = useState([
                 {unitcode: I000, name:" introduction to database",completed: false},
                 {unitcode:  J001, name:"Javascript", completed: true},
                 {unitcode:  P001, name:"Python", completed: true}]);

             function handleDelete(id){
                console.log(id);
             }    
    return(
    <div>
    <h1 className="Header">List Of Task</h1>
    <ul>
        {TaskList.map((Task , index) =>{
            <li key={index}>{Task.name}
            <span>{Task.id} - {name.id}</span>
            <button onClick={ () => handleDelete(Task.id)}>Delete</button>
            </li>
        })}
    </ul>
    </div>);
}
export default TaskList;
