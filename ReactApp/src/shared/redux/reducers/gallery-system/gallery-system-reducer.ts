/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";
/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking */
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";
import GallerySystemItemModelType from "../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";

/* Reducer`s payload type. */
type ActionPayloadType = {
  data: {
    photoId: number;
    items: [];
    pageCount: number;
  };
};

/**
 * @function gallerySystemReducer => Reducer that handels gallery system management.
 * @param state => previos state
 * @param action => incoming action that enters into reducer.
 */
const gallerySystemReducer = (
  state = initialState.gallerySystem,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_IMAGES:
      return {
        ...state,
        items: action.payload.data.items,
        pageCount: action.payload.data.pageCount,
      };

    case actionTypes.GALLERY_SYSTEM_DELETE_IMAGE:
      return {
        ...state,
        items: state.items.filter(
          (arg: GallerySystemItemModelType) =>
            arg.id !== action.payload.data.photoId
        ),
      };

    default:
      return state;
  }
};
export default gallerySystemReducer;
