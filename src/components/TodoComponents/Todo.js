import React from 'react';
import './Todo.css'

function Todo (props) {
    let completed = props.todo.completed ? " completed" : ""; 
    return (
        <div
            className={`todo ${completed}`}
            key={props.todo.id}
            onClick={event => {
                props.toggleItem(props.todo.id)
            }}
            >
            <p>{props.todo.task}</p>
        </div>
    )
}



// function Todo(props) {
//     return (
//       <div
//         className="todo"
//         key={props.todo.id}
//         onClick={event => {
//           props.toggleItem(props.todo.id);
//         }}
//       >
//         <p>{props.todo.task}</p>
//       </div>
//     );
//   }



export default Todo