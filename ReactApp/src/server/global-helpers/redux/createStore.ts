import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../../../shared/redux/reducers";

export default (req: {
  header: {
    cookie: string;
  };
}) => {
  const axiosInstance = axios.create({
    baseURL: "http://bachelor-project-api-3704.rostiapp.cz/",
    headers: { cookie: req.header.cookie || "" },
    withCredentials: true
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
