import React from "react";
import { Progress } from "reactstrap";
import styled from "styled-components";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  isVisible: boolean;
}

/**
 * @function GalleryUploadProgressBar => Progress bar of file that is being uploaded.
 * @param className => Class name that is generated via "Styled Components" library.
 * @param isVisible => visiblity flag of image progress bar.
 */
const GalleryUploadProgressBar: React.FC<IProps> = ({
  className,
  isVisible,
}) => {
  if (!isVisible) return null;
  return <Progress className={className} striped value={100} animated />;
};

export default styled(GalleryUploadProgressBar)`
  margin-top: 2.5vh;
  margin-bottom: 5vh;
`;
