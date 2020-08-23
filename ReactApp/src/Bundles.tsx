import syncComponent from "./lib/code-splitting/loading/Sync-Component";

export const Landing = syncComponent(
  "Landing",
  require("./shared/pages/root/Landing-Page")
);
