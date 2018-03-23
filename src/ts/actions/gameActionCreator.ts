import {Action} from 'redux';

// Actionタイプを定義
export const GameActionTypes = {
  PUT_STONE: Symbol('Put Stone'),
};

// ゲーム用Action型
export type gameAction = putAction;

// Actionの型定義
export interface putAction extends Action{
  readonly type: typeof GameActionTypes.PUT_STONE;
}

// 石を置く
export function putStone(): putAction{
  return {type: GameActionTypes.PUT_STONE};
}