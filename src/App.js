import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'go shopping'},
      {id: 2, content: 'pick up dry cleaning'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      // todos: todos
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        
      <div className="todo-app container">
        <h1 className="center blue-text">My Todo List</h1>
        <p><i>Click on todo to delete it from the list.</i></p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        
        <AddTodo addTodo={this.addTodo} />
      </div>
      </BrowserRouter>
    );
  }
}
  
export default App;