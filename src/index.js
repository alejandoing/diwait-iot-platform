import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'
import { Provider } from 'react-redux'
import App from './components/App';
import { Map as map } from 'immutable'
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

serviceWorker.unregister();