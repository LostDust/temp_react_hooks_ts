import * as React from "react";
import { reduxContext } from "@/store";

function Home(): JSX.Element {
  const { token, dispatch } = React.useContext(reduxContext);
  function changeValue(e: { target }, key: string): void {
    const action = {
      type: "UPDATE",
      value: key,
      [key]: e.target.value
    };
    dispatch(action);
  }

  return (
    <div>
      <br />
      <input
        type="text"
        value={token}
        onChange={(e): void => changeValue(e, "token")}
        placeholder="password"
      />
      <p>{token}</p>
    </div>
  );
}

export default Home;
