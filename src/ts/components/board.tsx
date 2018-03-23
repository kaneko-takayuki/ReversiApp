import {gameProps} from "../reducers/gameReducer";
import * as React from "react";
import {styles} from "../constants/styles";
import {Image, TouchableWithoutFeedback, View} from "react-native";
import {Stone} from "./stone";
import {DISPLAY_BOARD_SQUARE} from "../constants/sizes";
import {connect} from "react-redux";
import {putStone} from "../actions/gameActionCreator";

interface Props {
  black1: number;
  black2: number;
  white1: number;
  white2: number;
}

export class Board extends React.Component<Props, gameProps>{
  _onPress(e){
    console.log('(' + e.nativeEvent.locationX + ', ' + e.nativeEvent.locationY + ')');
  }

  /**
   * 石の描画を行う
   * @returns {any}
   */
  renderStone(){
    // 描画する石リストを生成
    let stones = [];
    console.log('black1: ' + this.props.black1.toString(2));
    console.log('black2: ' + this.props.black2.toString(2));
    console.log('white1: ' + this.props.white1.toString(2));
    console.log('white2: ' + this.props.white2.toString(2));
    console.log('');

    // 上半分の描画
    for(let row: number = 0; row < 4; row++){
      for(let col: number = 0; col < 8; col++){
        // (1 << 0) <= position <= (1 << 31)
        const position = 1 << ((row * 8) + col);

        // 黒/白の石が存在していたら、描画処理を行う
        if((this.props.black1 & position) != 0){
          stones.push(<Stone key={'stone' + (row*8 + col).toString()}
                             color='black'
                             positionX={DISPLAY_BOARD_SQUARE * row}
                             positionY={DISPLAY_BOARD_SQUARE * col} />);
        }else if((this.props.white1 & position) != 0){
          stones.push(<Stone key={'stone' + (row*8 + col).toString()}
                             color='white'
                             positionX={DISPLAY_BOARD_SQUARE * row}
                             positionY={DISPLAY_BOARD_SQUARE * col} />);
        }
      }
    }

    // 下半分の描画
    for(let row: number = 0; row < 4; row++){
      for(let col: number = 0; col < 8; col++){
        // (1 << 0) <= position <= (1 << 31)
        const position = 1 << ((row * 8) + col);

        // 黒/白の石が存在していたら、描画処理を行う
        if((this.props.black2 & position) != 0){
          stones.push(<Stone key={'stone' + (row*8 + col + 31).toString()}
                             color='black'
                             positionX={DISPLAY_BOARD_SQUARE * (row + 4)}
                             positionY={DISPLAY_BOARD_SQUARE * col} />);
        }else if((this.props.white2 & position) != 0){
          stones.push(<Stone key={'stone' + (row*8 + col + 31).toString()}
                             color='white'
                             positionX={DISPLAY_BOARD_SQUARE * (row + 4)}
                             positionY={DISPLAY_BOARD_SQUARE * col} />);
        }
      }
    }

    return (
      <View style={{position: 'absolute'}}>
        {stones}
      </View>
    )
  }

  render(){
    return (
      <View>
        {/* ゲーム盤を描画 */}
        <TouchableWithoutFeedback onPress={e => this._onPress(e)}>
          <Image
            source={require('./../../../assets/images/game_board.jpg')}
            resizeMode='contain'
            style={styles.board}
          />
        </TouchableWithoutFeedback>

        {/* 石を描画 */}
        {this.renderStone()}
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

export default connect(selector, dispatcher)(Board);
