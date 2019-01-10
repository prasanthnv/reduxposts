import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import  store from './store';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Button text="hello world" id="asds" disabled={true}/>
        <PostForm></PostForm>
          <Posts></Posts>
        </div>
      </Provider>
    );
  }
}

export default App;
