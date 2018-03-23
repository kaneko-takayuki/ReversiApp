import * as React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import {Audio} from 'expo';

import {homeProps} from '../reducers/homeReducer';
import {beginCpuFight} from '../actions/homeActionCreator';
import {styles} from '../constants/styles';

interface Props {
  pressButton;
  n: number;
}

class Home extends React.Component<Props, homeProps> {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.pressButton(this.props.n)} style={styles.button}>
          <Text style={styles.text}>対戦する</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// セレクター
function selector(state: any){
  return state.homeReducer;
}

// ディスパッチャー
function dispatcher(dispatch){
  return {
    pressButton: () => {dispatch(beginCpuFight())}
  }
}

export default connect(selector, dispatcher)(Home);