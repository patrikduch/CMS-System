import React from "react";
import { Button } from "reactstrap";

import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IProps => Components props interface.
 */
interface IProps extends IStyledComponentProps {
  isPublicSide?: boolean;
  action?(photoId: number): void;
  photoId: number;
}

/**
 * @function GalleryItemRemoval => Component for rendering remove functionality of selected gallery item.
 * @param isPublicSide => Boolean value that represents if  this item is rendered in admin or public side.
 */
const GalleryItemRemoval: React.FC<IProps> = ({
  action,
  className,
  isPublicSide,
  photoId,
}) => {
  const removePhoto = (photoId: number) => {
    if (action !== null) {
      action?.(photoId);
    }
  };

  return (
    <div className={className}>
      {!isPublicSide && (
        <Button onClick={() => removePhoto(photoId)} color="danger">
          Smazat
        </Button>
      )}
    </div>
  );
};

export default styled(GalleryItemRemoval)`
  margin-top: 5vh;
`;
