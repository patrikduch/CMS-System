import React from "react";
import ReactDOM from "react-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

import PaginationButtonItem from "./Pagination-Button-Item";

describe("PaginationButtonItem", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PaginationButtonItem
        togglePage={() => console.log("Toggle page fake event")}
        currentPageId={1}
      />,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
