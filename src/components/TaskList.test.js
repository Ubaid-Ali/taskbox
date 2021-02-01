import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";

import WithPinnedTasks from "./TaskList.stories";

it("renders pinned task at the start of the list", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  const lastTalkInput = div.querySelector(
    ".list-item:nth-child(1) input[values = 'Task 6 (pinned)']"
  );
  expect(lastTalkInput).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
});
