import { connect, ConnectedComponent } from "react-redux";

/* Actions to export with Connect components. */
import * as ownerInfoActions from "../../actions/owner-info/owner-info-actions";

/* Components to connect. */
import AdminOwnerInfoBasicDetails from "../../../connected-components/admin/owner-info/Owner-Info-Basic-Details";
import AdminOwnerInfoContactDetails from "../../../connected-components/admin/owner-info/Owner-Info-Contact-Details";
import CompanyName from "../../../connected-components/project-details/Company-Name";
import OwnerInfoDetails from "../../../connected-components/owner-info/Owner-Info-Details";

/* reselect selectors */

import {
  getBasicOwnerInfo,
  getContactOwnerInfo,
  getOwnerInfo,
} from "../../selectors/owner-info/owner-info-selectors";

/* Type checking. */
import { Dispatch, bindActionCreators } from "redux";
import OwnerInfoBasicDetailPropsType from "../../../../typescript/types/shared/connected-components/admin/owner-info/Owner-Info-Basic-Details-Props-Type";
import OwnerInfoContactDetailsPropsType from "../../../../typescript/types/shared/connected-components/admin/owner-info/Owner-Info-Contact-Details-Props-Type";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: {
  ownerInfo: {
    companyName: string;
    contactInfo: {
      street: string;
      zipCode: string;
      city: string;
    };
  };
}) => {
  return {
    ownerInfo: getOwnerInfo(state),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(ownerInfoActions, dispatch),
  };
};

/* Map to state object only for administration basic owner info (Company name, ico, dic). */
const adminBasicOwnerInfoProps = {
  mapStateToProps: (state: OwnerInfoBasicDetailPropsType) => {
    return {
      ownerInfo: getBasicOwnerInfo(state),
    };
  },
};

const adminContactInfoProps = {
  mapStateToProps: (state: OwnerInfoContactDetailsPropsType) => {
    return {
      ownerInfo: getContactOwnerInfo(state),
    };
  },
};

const OwnerInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerInfoDetails);

/* Component that stores only company name */
const CompanyNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyName);

const AdminBasicOwnerInfoContainer = connect(
  adminBasicOwnerInfoProps.mapStateToProps,
  mapDispatchToProps
)(
  AdminOwnerInfoBasicDetails as ConnectedComponent<
    React.FC<OwnerInfoBasicDetailPropsType>,
    Pick<OwnerInfoBasicDetailPropsType, never>
  >
);

const AdminContactOwnerInfoContainer = connect(
  adminContactInfoProps.mapStateToProps,
  mapDispatchToProps
)(
  AdminOwnerInfoContactDetails as ConnectedComponent<
    React.FC<OwnerInfoContactDetailsPropsType>,
    Pick<OwnerInfoContactDetailsPropsType, never>
  >
);

export {
  CompanyNameContainer,
  OwnerInfoContainer,
  AdminBasicOwnerInfoContainer,
  AdminContactOwnerInfoContainer,
};
