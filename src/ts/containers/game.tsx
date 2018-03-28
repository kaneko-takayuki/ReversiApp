import * as React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import {Board} from '../components/board'
import {gameProps} from '../reducers/gameReducer';
import {putStone} from '../actions/gameActionCreator';

interface Props {
  black1: number;
  black2: number;
  white1: number;
  white2: number;
}

class Game extends React.Component<Props, gameProps> {
  _onPress(e: any){
    console.log('(' + e.nativeEvent.locationX + ', ' + e.nativeEvent.locationY + ')');
  }

  render() {
    return (
      <View style={{justifyContent: 'center', padding: 10}}>

        {/*--- ゲームボード ---*/}
        <Board black1={this.props.black1} black2={this.props.black2} white1={this.props.white1} white2={this.props.white2} />
      </View>
    );
  }
}

// セレクター
function selector(state: any){
  return state.gameReducer;
}

// ディスパッチャー
function dispatcher(dispatch){
  return {
    putStone: () => {dispatch(putStone())}
  }
}

export default connect(selector, dispatcher)(Game);