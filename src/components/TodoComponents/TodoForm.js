import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
  return (
    <form onSubmit={this.props.addTodo}>
    <input type="text"
            value={this.props.todo}
            name='todo'
            onChange={this.props.inputHandler}/>

            <button type='submit'>Add Todo</button>
    </form>

  );
}
};


export default TodoForm;

// <form action="">
// <input type="text"
// name='inputText'
// value={props.value}  
// onChange={props.handleChange}  
// />

// <button onClick={props.addTodoButton}>Add Todo</button>
// <button onClick={props.clearTodoButton}>Clear Completed</button>

// </form>