import React from "react";
import ReactDOM from "react-dom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

import PaginationLeftItems from "./Pagination-Left-Items";

describe("PaginationLeftItems", () => {
  it("renders start sequence of left pagination items (no items are rendered)", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PaginationLeftItems
        currentPageId={1}
        togglePage={() => console.log("Toggle page fake event")}
        totalCount={3}
      />,
      div
    );

    expect(div.firstChild).toBe(null);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders start sequence of left pagination items (single item is rendered)", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <PaginationLeftItems
        currentPageId={2}
        togglePage={() => console.log("Toggle page fake event")}
        totalCount={3}
      />,
      div
    );

    expect(div.firstChild?.textContent).toBe("1");

    ReactDOM.unmountComponentAtNode(div);
  });
});
