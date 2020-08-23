import React from "react";
import ReactDOM from "react-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

import PaginationRightItems from "./Pagination-Right-Items";

describe("PaginationRightItems", () => {
  it("renders start sequence of right pagination items", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PaginationRightItems
        currentPageId={1}
        togglePage={() => console.log("Toggle page fake event")}
        totalCount={3}
      />,
      div
    );
    expect(div.firstChild?.textContent).toContain("2");

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders end sequence of right pagination items", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PaginationRightItems
        currentPageId={1}
        togglePage={() => console.log("Toggle page fake event")}
        totalCount={3}
      />,
      div
    );
    expect(div.lastChild?.textContent).toContain("3");

    ReactDOM.unmountComponentAtNode(div);
  });
});
