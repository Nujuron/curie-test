import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import 'antd/dist/antd.css'; // ant design lib

import TaskTable from './components/TaskTable';
import CreateForm from './components/CreateForm';

class App extends Component {

  // componentDidMount() {
  //   this.props.fetchTasks();
  // }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={TaskTable} />
          <Route path="/new" component={CreateForm} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
