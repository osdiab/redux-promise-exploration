import { createAction } from "redux-actions";

// only synchronous actions can be made
export const synchronous = createAction("SYNCHRONOUS");
export const startAsynchronous = createAction("START_ASYNCHRONOUS");
export const asynchronous = createAction("ASYNCHRONOUS");

// we need a separate function to actually do the async logic
export const asynchronousAction = (dispatch, payload) => {
  dispatch(startAsynchronous(payload));
  window.setTimeout(() => dispatch(asynchronous(payload)), 3000);
}
