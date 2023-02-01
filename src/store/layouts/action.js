import { CHANGE_LAYOUT, CHANGE_LAYOUT_MODE } from "./actionType";

export const changeLayoutMode = mode => ({
    type: CHANGE_LAYOUT_MODE,
    payload: mode,
  });

  export const changeLayout = layout => ({
    type: CHANGE_LAYOUT,
    payload: layout,
  });