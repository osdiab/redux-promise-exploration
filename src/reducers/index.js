import { handleActions } from "redux-actions";

import { synchronous, asynchronous } from "../actions";

const defaultState = {};

const reducer = handleActions({
  [synchronous]: (state, action) => {
    console.log(action);
    return state;
  },
  [asynchronous]: (state, action) => {
    console.log(action);
    return state;
  },
}, defaultState);

export default reducer;
