import { createSelector } from "reselect";
import OwnerInfoContactDetailsPropsType from "../../../../typescript/types/shared/connected-components/admin/owner-info/Owner-Info-Contact-Details-Props-Type";
import OwnerInfoBasicDetailPropsType from "../../../../typescript/types/shared/connected-components/admin/owner-info/Owner-Info-Basic-Details-Props-Type";

/**
 * @interface IState => State selector`s interface.
 */
interface IState {
  ownerInfo: {
    companyName: string;
    contactInfo: {
      street: string;
      zipCode: string;
      city: string;
    };
  };
}

interface IAdminOwnerInfoState {
  ownerInfo: {
    companyName: string;
    ico: string;
    dic: string;
    contactInfo: {
      street: string;
      city: string;
      zipCode: string;
      email: string;
    };
  };
  projectDetail: { projectName: string };
}

const ownerInfoState = (state: IState) => state;

const adminOwnerInfoState = (state: IAdminOwnerInfoState) => state;

const ownerInfoBasicState = (state: OwnerInfoBasicDetailPropsType) => state;

const ownerContactInfoState = (state: OwnerInfoContactDetailsPropsType) =>
  state;

const getOwnerInfo = createSelector([ownerInfoState], (t) => t.ownerInfo);

const getAdminOwnerInfo = createSelector(
  [adminOwnerInfoState],
  (t) => t.ownerInfo
);

const getBasicOwnerInfo = createSelector(
  [ownerInfoBasicState],
  (t) => t.ownerInfo
);

const getContactOwnerInfo = createSelector(
  [ownerContactInfoState],
  (t) => t.ownerInfo
);

export {
  getAdminOwnerInfo,
  getContactOwnerInfo,
  getOwnerInfo,
  getBasicOwnerInfo,
};
