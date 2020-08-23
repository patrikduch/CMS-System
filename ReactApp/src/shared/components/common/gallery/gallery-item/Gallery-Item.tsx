import React, { useState, useEffect, useRef } from "react";
import GallerySlideshowImage from "../../../client-app/gallery/slideshow/Gallery-Slideshow-Image";
import GalleryItemImage from "./Gallery-Item-Image";
import GalleryItemRemoval from "./Gallery-Item-Removal";

/* Type checking. */
import IReactComponentSideProps from "../../../../../typescript/interfaces/shared/styled-components/IReact-Component-Side-Props";
import { useComponentVisible } from "../../../../hooks/dom/component.focus.hook";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IReactComponentSideProps {
  photoId: number;
  src: string;
  alt: string;
  removePhoto?(photoId: number): void;
}

/**
 * @function GalleryItem => Component that renders single image item of gallery.
 * @param param0
 */
const GalleryItem: React.FC<IProps> = ({
  alt,
  photoId,
  isPublicSide,
  removePhoto,
  src,
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(true);

  const toggleModal = () => {
    setModalVisibility(true);
    setIsComponentVisible(true);
  };

  useEffect(() => {
    if (!modalVisibility) {
      setIsComponentVisible(true);
    }
  }, [modalVisibility]);

  return (
    <div ref={ref}>
      <GalleryItemImage
        description={alt}
        src={src}
        viewImgPreview={toggleModal}
      />
      <GalleryItemRemoval
        action={removePhoto}
        isPublicSide={isPublicSide}
        photoId={photoId}
      />
      <div>
        <GallerySlideshowImage
          closeImg={toggleModal}
          isOpen={
            modalVisibility === true ? isComponentVisible : modalVisibility
          }
          src={src.replace("thumbs", "originals")}
          toggleFocus={setIsComponentVisible}
        />
      </div>
    </div>
  );
};

export default GalleryItem;
