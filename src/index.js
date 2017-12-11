import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom'; // メンバだけ引っこ抜くとReactDOM.render()と書かなくて良い
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/app'; //メインコンポーネント

const store = configureStore(); // ストア呼び出し
const rootEl = document.getElementById('root') // 流しこむ対象の要素

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);