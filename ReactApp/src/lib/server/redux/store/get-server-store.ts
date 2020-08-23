import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../../../../shared/redux/reducers";
import { Request } from "express";

/**
 * @function getServerStore => Creation of server Redux store.
 * @param req => Partical request from which we want to create separate instance of Redux store.
 */
const getServerStore = (req: Request) => {
  const axiosInstance = axios.create({
    baseURL: "http://bachelor-project-api-3704.rostiapp.cz/",
    headers: { cookie: req.headers.cookie || "" },
    withCredentials: true,
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};

export default getServerStore;
