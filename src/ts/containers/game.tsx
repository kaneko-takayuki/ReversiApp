import * as React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Audio} from 'expo';

import {Board} from '../components/board'
import {gameProps} from '../reducers/gameReducer';
import {putStone} from '../actions/gameActionCreator';
import {styles} from '../constants/styles';

interface Props {
}

class Game extends React.Component<Props, gameProps> {
  _onPress(e: any){
    console.log('(' + e.nativeEvent.locationX + ', ' + e.nativeEvent.locationY + ')');
  }

  render() {
    return (
      <View style={{justifyContent: 'center', padding: 10}}>

        {/*--- ゲームボード ---*/}
        <Board />
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
    putStone: () => {dispatch(putStone())}
  }
}

export default connect(selector, dispatcher)(Game);