import {Action} from 'redux';

// Actionタイプを定義
export const TitleActionTypes = {
  PRESS_BUTTON: Symbol('Press Button'),
};

// タイトル用Action型
export type titleAction = PressButtonAction;

// Actionの型定義
export interface PressButtonAction extends Action{
  readonly type: typeof TitleActionTypes.PRESS_BUTTON;
  readonly n: number;
}

// Action生成関数
export function pressButton(n: number): PressButtonAction{
  return {type: TitleActionTypes.PRESS_BUTTON, n: n + 1};
}
