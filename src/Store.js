import { createStore } from "redux";
import { Counter } from "./Reducers";

const defaultState = {
  count: 42,
};

export const Store = createStore(Counter, defaultState);
