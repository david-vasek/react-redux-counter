export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export function ActionIncrement() {
  return {
    type: INCREMENT,
  };
}

export function ActionDecrement() {
  return {
    type: DECREMENT,
  };
}
