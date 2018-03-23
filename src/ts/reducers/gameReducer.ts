import {GameActionTypes} from '../actions/gameActionCreator';

export interface gameProps {
}

const initState = {
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