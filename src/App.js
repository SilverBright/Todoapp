import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'go shopping'},
      {id: 2, content: 'pick up dry cleaning'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">My Todo List</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
  
export default App;
