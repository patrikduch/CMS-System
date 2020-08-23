/**
 * @type GallerySystemItemModelType => Type anotation for transformed gallery items data that comes from data layer.
 */
type GallerySystemItemModelType = {
  id: number;
  original: string;
  thumbnail: string;
  isSelected: boolean;
  thumbnailWidth: number;
  thumbnailHeight: number;
  caption: string;
};

export default GallerySystemItemModelType;
