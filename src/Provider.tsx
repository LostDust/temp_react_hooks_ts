import * as React from "react";
import { initStore, reducer, reduxContext } from "@/store";

function Provider(props: { children }): JSX.Element {
  const [store, dispatch] = React.useReducer(reducer, initStore);

  return (
    <reduxContext.Provider value={{ ...store, dispatch }}>
      {props.children}
    </reduxContext.Provider>
  );
}

export default Provider;
