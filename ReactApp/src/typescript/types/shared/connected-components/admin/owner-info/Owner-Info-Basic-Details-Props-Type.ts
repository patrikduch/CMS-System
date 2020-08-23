import OwnerInfoTypeModel from "../../../../app/models/Owner-Info-Type-Model";
import OwnerInfoFieldType from "../../../../../enums/shared/redux/Owner-Info-Field-Type";

/**
 * @type OwnerInfoBasicDetailPropsType => Type anotation for owner info basic details.
 */
type OwnerInfoBasicDetailPropsType = {
  ownerInfo: OwnerInfoTypeModel;

  actions: {
    changeOwnerInfoField(type: OwnerInfoFieldType, value: string): void;
  };
};

export default OwnerInfoBasicDetailPropsType;
