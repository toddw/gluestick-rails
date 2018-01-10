/* @flow */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import Home from "../components/Home";
import { loadTodos, addTodo, editTodo, removeTodo } from "../actions/todos";

export class HomeApp extends Component {
  props: {
    todos: Array<Object>;
    addTodo: Function;
    editTodo: Function;
    removeTodo: Function;
    loadTodos: Function;
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  render () {
    const { todos, addTodo, editTodo, removeTodo } = this.props;
    return (
      <div>
        <Helmet title="Home" />
        <Home
          todos={todos}
          addTodo={addTodo}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({todos: state.todos}),
  (dispatch) => bindActionCreators({loadTodos, addTodo, editTodo, removeTodo}, dispatch)
)(HomeApp);

