import asyncComponent from "./lib/code-splitting/loading/Async-Component";

export const Landing = asyncComponent("Landing", () =>
  import("./shared/pages/root/Landing-Page")
);

