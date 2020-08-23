import React from "react";
import ImgsViewer from "react-images-viewer";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IProps => Components props interface.
 */
interface IProps extends IStyledComponentProps {
  src: string /* Src of image to view. */;
  isOpen: boolean /* Is preview opened? */;

  closeImg(bit: boolean): void /* Closing previewed image. */;

  toggleFocus: Function;
}

/**
 * @function GallerySlideshowImage => Preview of selected image.
 * @param closeImg => close img when needed.
 * @param isOpen => Identification if image should be opened.
 * @param src => Src of selected image.
 */
const GallerySlideshowImage: React.FC<IProps> = ({
  closeImg,
  toggleFocus,
  isOpen,
  src,
}) => {
  const onClose = () => {
    closeImg(false);
    //toggleFocus(true);
    toggleFocus(true);
  };

  return (
    <>
      <div>
        <ImgsViewer
          closeBtnTitle="Zavřít obrázek"
          currImg={0}
          isOpen={isOpen}
          imgs={[{ src: src }]}
          onClose={onClose}
          showImgCount={false}
        />
      </div>
    </>
  );
};

export default GallerySlideshowImage;
