import {gameProps} from "../reducers/gameReducer";
import * as React from "react";
import {styles} from "../constants/styles";
import {Image, TouchableWithoutFeedback, View} from "react-native";
import {Stone} from "./stone";
import {DISPLAY_BOARD_SQUARE} from "../constants/sizes";

interface Props {
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
    for(let row: number = 0; row < 8; row++){
      for(let col: number = 0; col < 8; col++){
        stones.push(<Stone key={'stone' + (row*8 + col).toString()}
                           positionX={DISPLAY_BOARD_SQUARE * row}
                           positionY={DISPLAY_BOARD_SQUARE * col}
        />);
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