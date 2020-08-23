import React from "react";
import PropTypes from "prop-types";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  percentage: number;
}

/**
 * @function Progress => Component`to display progress bar of file uploading.
 * @param percentage => Current percentage value of file upload.
 */
const Progress: React.FC<IProps> = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;
