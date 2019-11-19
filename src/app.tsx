import * as React from "react";
import { render } from "react-dom";
import Provider from "@/Provider";
import Root from "@/Root";

render(
  <Provider>
    <Root />
  </Provider>,
  document.querySelector("#app")
);
