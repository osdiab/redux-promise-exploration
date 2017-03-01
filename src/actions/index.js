import { createAction } from "redux-actions";

export const synchronous = createAction("SYNCHRONOUS");

export const startAsynchronous = createAction("START_ASYNCHRONOUS");
export const asynchronous = createAction("ASYNCHRONOUS", async payload => {
  return await new Promise((resolve, reject) => {
    window.setTimeout(() => resolve(payload), 3000);
  });
});
