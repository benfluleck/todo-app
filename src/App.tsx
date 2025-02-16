import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {Status} from './components/Status';

class App extends Component<any, any> {
  state = {
    value: '',
    todos: []
  }

  componentDidMount() {
    fetch(`${this.props.apiUrl}/todos`)
      .then(r => r.json())
      .then(todos => this.setState({ todos }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.apiUrl !== this.props.apiUrl) {
      fetch(`${this.props.apiUrl}/todos`)
        .then(r => r.json())
        .then(todos => this.setState({ todos }))
    }
  }

  updateValue(e: any) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <Status/>
        <input type="text" value={this.state.value} onChange={this.updateValue.bind(this)}/>
        <ul>
          {this.state.todos.map((todo: any, i: number) => <li key={i}>{todo.value}</li>)}
        </ul>
        <button
          onClick={() => this.setState({todos: [...this.state.todos, {id: nanoid(), value: this.state.value, done: false, createdAt: Date.now()}]})}
        >
          add todo
        </button>
        <Status/>
      </div>
    );
  }
}

export default App;
