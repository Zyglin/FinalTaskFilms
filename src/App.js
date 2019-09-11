/* eslint-disable class-methods-use-this */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import AppRouter from './AppRouter';

const composeEnhancers = composeWithDevTools({
  name: 'Remote Dev Tools',
  realtime: true,
  hostname: 'localhost',
  port: 9000,
});

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
