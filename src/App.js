import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { rootSaga } from './sagas/index';
import loginReducer from './reducer/DataEnterReducer';
import reducer from './reducer';
import AppRouter from './AppRouter';

const composeEnhancers = composeWithDevTools({
  name: 'Remote Dev Tools',
  realtime: true,
  hostname: 'localhost',
  port: 9000,
});

const rootReducer = combineReducers({
  login: loginReducer,
  data: reducer,
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['data', '_persist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const saga = createSagaMiddleware();
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(saga)));
const persistor = persistStore(store);
saga.run(rootSaga);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
