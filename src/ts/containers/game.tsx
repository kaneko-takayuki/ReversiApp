import * as React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Audio} from 'expo';

import {Board} from '../components/board'
import {gameProps} from '../reducers/gameReducer';
import {putStone} from '../actions/gameActionCreator';
<<<<<<< HEAD

interface Props {
  black1: number;
  black2: number;
  white1: number;
  white2: number;
=======
import {styles} from '../constants/styles';

interface Props {
>>>>>>> 4729dddcc928786a893afcf4803d743a09b2d324
}

class Game extends React.Component<Props, gameProps> {
  _onPress(e: any){
    console.log('(' + e.nativeEvent.locationX + ', ' + e.nativeEvent.locationY + ')');
  }

  render() {
    return (
      <View style={{justifyContent: 'center', padding: 10}}>

        {/*--- ゲームボード ---*/}
<<<<<<< HEAD
        <Board black1={this.props.black1} black2={this.props.black2} white1={this.props.white1} white2={this.props.white2} />
=======
        <Board />
>>>>>>> 4729dddcc928786a893afcf4803d743a09b2d324
      </View>
    );
  }
}

// セレクター
function selector(state: any){
<<<<<<< HEAD
  return state.gameReducer;
=======
  return state.homeReducer;
>>>>>>> 4729dddcc928786a893afcf4803d743a09b2d324
}

// ディスパッチャー
function dispatcher(dispatch){
  return {
    putStone: () => {dispatch(putStone())}
  }
}

export default connect(selector, dispatcher)(Game);