import React from "react";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  error404ImgUrl: string;
}

/**
 * @function Error404Image => Component that represents image of 404 error state.
 * @param error404ImgUrl => Passed url of error image.
 */
const Error404Image: React.FC<IProps> = ({ error404ImgUrl }) => {
  return <img alt="error 404 logo" src={error404ImgUrl} width="80%" />;
};

export default Error404Image;
