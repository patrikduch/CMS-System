import OwnerInfoFieldType from "../../../../../enums/shared/redux/Owner-Info-Field-Type";

/**
 * @type OwnerInfoContactDetailsPropsType => Type anotation for owner info contact details (street, zipCode, email)
 */
type OwnerInfoContactDetailsPropsType = {
  ownerInfo: { contactInfo: { street: string; zipCode: string; city: string } };

  actions: {
    changeOwnerInfoField(type: OwnerInfoFieldType, value: string): void;
  };
};

export default OwnerInfoContactDetailsPropsType;
