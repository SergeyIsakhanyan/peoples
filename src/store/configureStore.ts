import throttle from 'lodash/throttle';
import { combineReducers, compose, createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IUserDataState, userDataReducer } from '../containers/UserData/reducers';
import * as localStore from './localStore';
import userDataWatcher from '../containers/UserData/sagas';
import { all } from 'redux-saga/effects';
import { routerMiddleware, RouterState, routerReducer } from 'react-router-redux';
import { History } from 'history';
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync } from 'redux-state-sync';

const STATE_KEY = '@ppl/ppl-web-app/v-1';
const STATE_REFRESH = 1000;

export interface StoreState {
  routing: RouterState;
  userData: IUserDataState;
}

const reducers = combineReducers<StoreState>({
  routing: routerReducer,
  userData: userDataReducer,
});

const config = {
  broadcastChannelOption: { type: 'localstorage' },
};

function* sagas() {
  yield all([userDataWatcher()]);
}

export function configureStore(history: History): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = getCompose();
  const persistedState = localStore.loadState<StoreState>(STATE_KEY);
  // @ts-ignore
  const store = createStore<StoreState>(
    withReduxStateSync(reducers),
    persistedState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history), createStateSyncMiddleware(config))
    )
  );
  store.subscribe(
    throttle(() => {
      localStore.saveState(STATE_KEY, store.getState());
    }, STATE_REFRESH)
  );
  sagaMiddleware.run(sagas);
  initStateWithPrevTab(store);
  return store;
}

function getCompose() {
  let result = compose;
  if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose } = window;
    result = devToolsCompose || result;
  }
  return result;
}
