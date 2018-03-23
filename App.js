import React from 'react';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import applyMiddleware from 'redux/es/applyMiddleware';
import {Scene, Stack, Router} from 'react-native-router-flux';

import Title from './src/js/containers/title';
import Home from './src/js/containers/home';
import Game from './src/js/containers/game';
import rootReducer from "./src/js/reducers";
import {createStore} from "redux";

// Providerに渡す用のストアを生成する
let store = createStore(rootReducer, applyMiddleware(logger));
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key='root'>
            <Scene key='app-title' component={Title} title='タイトル'/>
            <Scene key='home' component={Home} title='ホーム' />
            <Scene key='game' initial component={Game} title='ゲーム' />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
