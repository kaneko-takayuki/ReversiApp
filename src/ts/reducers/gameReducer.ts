import {GameActionTypes} from '../actions/gameActionCreator';

export interface gameProps {
  black1: number;
  black2: number;
  white1: number;
  white2: number;
}

const initState = {
  black1: (1 << 28),
  black2: (1 << 35),
  white1: (1 << 27),
  white2: (1 << 36)
};

// ゲーム画面用Reducer
export function gameReducer(state: gameProps = initState, action){
  switch(action.type){
    case GameActionTypes.PUT_STONE:
      return state;

    default:
      return state;
  }
}