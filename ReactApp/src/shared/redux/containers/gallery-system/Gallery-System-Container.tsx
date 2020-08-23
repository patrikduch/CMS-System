import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* 
  All redux actions that will be sent from container to the specific component.
*/

import * as gallerySystemActions from "../../../redux/actions/gallery-system/gallery-system-actions";

import GalleryImagesAdminList from "../../../connected-components/gallery-system/Gallery-Images-Admin-List";
import GallerySystemImagesList from "../../../connected-components/gallery-system/Gallery-System-Images-List";

/* Memoize selectors. */
import {
  getGalleryItems,
  getPageCount,
} from "../../selectors/gallery-system/gallery-system-selectors";
import GallerySystemItemFetchedType from "../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Fetched-Type";

/* Container`s state interface. */
interface IState {
  gallerySystem: {
    items: GallerySystemItemFetchedType[];
    pageCount: number;
  };
}

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: IState) => {
  return {
    imageItems: getGalleryItems(state.gallerySystem),
    pageCount: getPageCount(state.gallerySystem),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gallerySystemActions: bindActionCreators(gallerySystemActions, dispatch),
  };
};

/**
 * Creation of Redux connected component for displaying photos from gallery system on public side.
 */
const GalleryImagesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GallerySystemImagesList);

/**
 *  Creation of Redux connected component for photo management, that enables removing and creation particular photos.
 */
const GalleryImagesAdminListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryImagesAdminList);

export { GalleryImagesAdminListContainer, GalleryImagesListContainer };
