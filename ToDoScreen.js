



// const Task = ({ title, description }) => {
//     return (
//         <div className="task">
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//     );
// };

// const ToDoScreen = () => {
//     const [taskList, setTaskList] = useState([]);

//     return (
//         <div className="Screen">
//             <h1 className="ui heading center">To Do List</h1>
//             <div>
//                 <button
//                     onClick={() => {
//                         setTaskList([
//                             ...taskList,
//                             {
//                                 title: "Go to gym",
//                                 description: "Going to the gym is good for muscle",
//                             },
//                         ]);
//                     }}
//                     className="ui secondary button"
//                 >
//                     Add Task
//                 </button>
//                 <div className="ui cards">
//                     {taskList.map((task, index) => (
//                         <Task 
//                             key={index}
//                             title={task.title}
//                             description={task.description}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ToDoScreen;



import { useState } from "react";
import Task from '../components/Task';

const ToDoScreen = () =>{
    const [taskList, setTaskList] = useState([]);
    return(
        <div className="screen">
            <h1 className="ui heading center"> ToDo list</h1>
            <div>
                <button
                onClick={(e)=>{
                    // setTaskCount(taskCount+1)
                    setTaskList([
                        ...taskList,
                        {
                            title: "Go to gym",
                            description: "Going to the gym is good for muscle",
                            createdDate : new Date(),
                        },
                    ]);
                }}
                className="ui secondary button"
                >
                    Add Task
                </button>
                <section>
                <div class="ui cards">
                {taskList.map((task)=>(
                    <Task task ={task}/>
                ))}
                </div>
                </section>
                
            </div>
        </div>
    );

};

export default ToDoScreen;