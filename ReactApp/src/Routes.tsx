import {
  Landing,
} from "./Bundles";


export default [
  {
    routes: [
      {
        ...Landing,
        path: "/",
        exact: true,
      },
    ],
  },
];
