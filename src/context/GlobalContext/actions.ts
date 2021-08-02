import * as types from "./actionsTypes";

export const muda = (dispatch: any) => {
  dispatch({ type: types.MUDA });
};

export const addValue = (dispatch: any, value: Object) => {
  dispatch({ type: types.ADD_VALUE, value });
};

export const removeValue = (dispatch: any, key: string) => {
  dispatch({ type: types.REMOVE_VALUE, key });
};
