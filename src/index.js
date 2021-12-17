import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { user, followers, repos } from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const initialStore = {
  user: user,
  followers: followers,
  repos: repos,
  isLoading: false,
  error: { show: false, msg: '' },
};

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
