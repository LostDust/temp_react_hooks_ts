import { createContext } from "react";

const reduxContext = createContext(null);
const initStore = { token: "hello" };

interface IAction {
  type: string;
  value: string;
}
function reducer(state: {}, action: IAction): {} {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case "UPDATE":
      newState[action.value] = action[action.value];
      return newState;
    default:
      return state;
  }
}

export { reduxContext, reducer, initStore };
