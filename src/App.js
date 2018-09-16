import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlaceSuggestApp from './containers/PlaceSuggestApp';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PlaceSuggestApp />
        </div>
      </Provider>
    );
  }
}

export default App;
