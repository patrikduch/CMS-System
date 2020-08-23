/**
 * @interface ReduxActionPropsType action type of any action that is passed into particular reducer.
 * */
type ReduxActionPropsType<T> = {
  type: string;
  payload: T;
};

export default ReduxActionPropsType;
