import {Dimensions, ScaledSize} from "react-native";

const window_size: ScaledSize = Dimensions.get('window');

/*--- 画面に関するサイズ ---*/
const WINDOW_WIDTH: number = window_size.width;    // 画面の横はb
const WINDOW_HEIGHT: number = window_size.height;  // 画面の高さ
const WINDOW_SCALE: number = window_size.scale;    // ピクセルレート
const PADDING: number = 10;  // 一番上の親のパディング

/*--- ゲーム盤に関するサイズ ---*/
const ORIGINAL_BOARD_SIZE: number = 970;    // オリジナルサイズ
const ORIGINAL_BOARD_PADDING: number = 45;  // オリジナルの縁サイズ
const ORIGINAL_BOARD_SQUARE: number
  = (ORIGINAL_BOARD_SIZE - (2 * ORIGINAL_BOARD_PADDING)) / 8;  // オリジナルの1マスの長さ
const DISPLAY_BOARD_SCALE: number = (WINDOW_WIDTH - 2 * PADDING) / ORIGINAL_BOARD_SIZE;     // 表示スケール

export const DISPLAY_BOARD_SIZE: number = ORIGINAL_BOARD_SIZE * DISPLAY_BOARD_SCALE;        // 表示する一辺の長さ
export const DISPLAY_BOARD_PADDING: number = ORIGINAL_BOARD_PADDING * DISPLAY_BOARD_SCALE;  // 表示する縁サイズ
export const DISPLAY_BOARD_SQUARE: number = ORIGINAL_BOARD_SQUARE * DISPLAY_BOARD_SCALE;    // 表示するマスサイズ
