import React from "react";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Components props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  description: string /* Image description. */;
  src: string /* Source url of image. */;
  viewImgPreview(): void;
}

const GalleryItemImage: React.FC<IProps> = ({
  className,
  description,
  src,
  viewImgPreview,
}) => {
  return (
    <img
      className={className}
      onClick={viewImgPreview}
      src={src}
      alt={description}
    />
  );
};

export default styled(GalleryItemImage)`
  border: 2px solid black;
  margin-bottom: 0.8vh;
  width: 200px;

  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px; /* Rounded border */
  padding: 5px; /* Some padding */

  :hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;
