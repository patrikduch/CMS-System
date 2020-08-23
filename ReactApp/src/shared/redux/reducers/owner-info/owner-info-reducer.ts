// Import of all actions types

import * as actionTypes from "../../actions/action-types";

// Import initial state configuration
import initialState from "../initial-state";

/* Type checking */
import OwnerInfoFieldType from "../../../../typescript/enums/shared/redux/Owner-Info-Field-Type";
import OwnerInfoModelType from "../../../../typescript/types/app/models/Owner-Info-Type-Model";
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/**
 * @type ActionPayloadType => Owner info reducer`s payload type.
 */
type ActionPayloadType = {
  type: OwnerInfoFieldType;
  data: OwnerInfoModelType;
};

/**
 * @function ownerInfoReducer => Owner info details management.
 * @param state   => Initial state for owner info reducer.
 * @param action  => Action that enters into owner info reducer.
 * 
 */
const ownerInfoReducer = (
  state = initialState.ownerInfo,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    /* Fetch all information about product owner */

    case actionTypes.FETCH_OWNER_INFO_DETAIL:
      return {
        ...state,
        companyName: action.payload.data.companyName,
        ico: action.payload.data.ico,
        dic: action.payload.data.dic,

        contactInfo: {
          street: action.payload.data.street,
          city: action.payload.data.city,
          zipCode: action.payload.data.zipCode,
          email: action.payload.data.email
        }
      };

    /* Owner info field change not persisted in db. */

    case actionTypes.CHANGE_OWNER_INFO_FIELD:
      /* data is new text value for specified typed property */

      switch (
        action.payload
          .type /* Type of passed property that is recognized by Enum. */
      ) {
        /*  change dic identifier. */
        case OwnerInfoFieldType.Dic:
          return {
            ...state,
            dic: action.payload.data
          };

        /* change ico identifier. */
        case OwnerInfoFieldType.ICO:
          return {
            ...state,
            ico: action.payload.data
          };

        /* change company name. */
        case OwnerInfoFieldType.CompanyName:
          return {
            ...state,
            companyName: action.payload.data
          };

        /* change street name. */
        case OwnerInfoFieldType.Street:
          return {
            ...state.contactInfo,
            contactInfo: {
              street: action.payload.data
            }
          };

        /* change name of the city. */

        case OwnerInfoFieldType.City:
          return {
            ...state.contactInfo,
            contactInfo: {
              city: action.payload.data
            }
          };

        /* change zip code. */

        case OwnerInfoFieldType.ZipCode:
          return {
            ...state.contactInfo,
            contactInfo: {
              zipCode: action.payload.data
            }
          };

        /* change of e-mail address. */

        case OwnerInfoFieldType.Email:
          return {
            ...state.contactInfo,
            contactInfo: {
              email: action.payload.data
            }
          };

        default:
          return {
            ...state
          };
      }

    default:
      return state;
  }
};
export default ownerInfoReducer;
