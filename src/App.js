import React, { Component } from 'react';
import './App.css';
import Lister from './Lister';
import store from './store/';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Lister/>
      </Provider>
      </div>
    );
  }
}

export default App;
