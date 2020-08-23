import React from "react";
import ToggleableMessage from "../../../common/messages/Toggleable-Message";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  msg: string;
  isVisible: boolean;
}

/**
 * @function GalleryResultMessage => Component that determinates if result message should be displayed.
 */
const GalleryResultMessage: React.FC<IProps> = ({ isVisible, msg }) => {
  if (!isVisible) return null;
  return (
      <ToggleableMessage msg={msg} />
  );
};

export default GalleryResultMessage;
