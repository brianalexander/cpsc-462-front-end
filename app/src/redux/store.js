import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";

import { loadState, saveState } from "./utilities";
import rootReducer from "./rootReducer";
import { isValidAndAuthorized } from "../auth";

const previousState = loadState();
if (
  previousState !== undefined &&
  !isValidAndAuthorized(previousState.auth.jwt)
) {
  previousState.auth = {};
}

const [
  thunk,
  immutableStateInvariant,
  serializableStateInvariant,
] = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, immutableStateInvariant, serializableStateInvariant],
  preloadedState: previousState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
