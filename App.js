import React from 'react';
import {Provider} from 'react-redux';
import {logger} from "redux-logger";
import {StyleSheet, Text, View} from 'react-native';

import Title from './src/js/containers/title';
import rootReducer from "./src/js/reducers";
import {createStore} from "redux";
import applyMiddleware from "redux/es/applyMiddleware";

// Providerに渡す用のストアを生成する
let store = createStore(rootReducer, applyMiddleware(logger));
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
