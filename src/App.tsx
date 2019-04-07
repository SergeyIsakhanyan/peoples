import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { configureStore } from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { LayoutContainer } from './containers/LayoutContainer';

const history = createHashHistory();
export const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} store={store}>
          <LayoutContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
