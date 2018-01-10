/* @flow */

import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  props: {
    todos: Array<Object>;
    addTodo: Function;
    editTodo: Function;
    removeTodo: Function;
  }

  input: HTMLInputElement;

  render () {
    const { todos } = this.props;
    return (
      <div>
        <h1>Rails Todo List With Rails Frontend</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.name}
              <span onClick={() => this.handleEdit(todo)} style={styles.action}>edit</span>
              <span onClick={() => this.handleDelete(todo)} style={styles.action}>delete</span>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter new todo and press enter" ref={el => this.input = el} style={{width: 500}} />
        </form>
      </div>
    );
  }

  handleSubmit = (e:Event) => {
    e.preventDefault();
    this.props.addTodo(this.input.value);
    this.input.value = "";
  }

  handleEdit = (todo:Object) => {
    const newText = prompt("Enter new todo text", todo.name);
    this.props.editTodo(todo.id, newText);
  }

  handleDelete = (todo:Object) => {
    if(confirm(`Are you sure you want to delete: ${todo.name} ?`)) {
      this.props.removeTodo(todo.id);
    }
  }
}

const styles = {
  action: {
    margin: 10,
    fontSize: 10,
    color: "blue",
    cursor: "pointer"
  }
};

