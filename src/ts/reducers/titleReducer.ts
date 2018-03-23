import {TitleActionTypes} from '../actions/titleActionCreator';

export interface titleProps {
  n: number;
}

const initState = {
    n: 1,
};

// タイトル画面用Reducer
export function titleReducer(state: titleProps = initState, action){
  switch(action.type){
    case TitleActionTypes.PRESS_BUTTON:
      return Object.assign({}, state, {n: action.n});

    default:
      return state;
  }
}