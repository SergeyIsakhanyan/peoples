import React, { Component } from 'react';
import './App.css';
import EnhancedTable from './containers/PeoplesTable/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EnhancedTable />
      </div>
    );
  }
}

export default App;
