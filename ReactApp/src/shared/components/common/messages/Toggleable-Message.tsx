import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  msg: string;
}

/**
 * @function ToggleableMessage => Display toggleable message.
 * @param msg => Message that will be displayed.
 */
const ToggleableMessage: React.FC<IProps> = ({ msg }) => {
  const [isvisible, setvisible] = useState(true);

  if (!isvisible) return <div />;

  const changeVisibilityHandler = () => {
    setvisible(false);
  };

  return (
    <div className="alert alert-info alert-dismissible fade show">
      {msg}
      <button type="button" className="close" onClick={changeVisibilityHandler}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

ToggleableMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ToggleableMessage;
