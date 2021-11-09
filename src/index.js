import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Board from './Board';
import './index.css';
import reducers from './reducers/reducers';


const store = createStore(reducers);

ReactDOM.render(
  <Provider store = {store}>
    <Board />
  </Provider>,
  // <Board/>,
  document.getElementById('root')
);
