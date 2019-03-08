import React, { Component } from 'react';
import ReactDOM from "react-dom";


import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todos = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}]


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      todo: ''
    };
  }
    // addTodo = e => {
    //   e.preventDefault();
    //   const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    //   this.setState({ 
    //     todos: [...this.state.todos, newTodo], 
    //     todo: '' 
    //   });
    // };

    inputHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };




    addTodo = event => {
      event.preventDefault()
      this.setState(prevState => {
        return {
          todos: [
            ...prevState.todos,
            {
              completed: false,
              id: Date.now(),
             task: prevState.todo
            }
          ],
          todo: ''
        }
      })
    }

   

    toggleItem = itemId => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo => {
            if(todo.id === itemId) {
              return {
                task: todo.task,
                id: todo.id,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        }
      })
    }

    clearCompleted = () => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(todo => {
            return !todo.completed
          })
        }
      })
    }



  render() {
    return(
      <div>
      
      
        <TodoForm
          todo={this.state.todo}
          inputHandler={this.inputHandler}
          addTodo={this.addTodo}
        />

  <TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}
        />

       <button onClick={this.clearCompleted}>Clear Complete</button>
      </div>
    )
  }
}

// dffs

export default App;