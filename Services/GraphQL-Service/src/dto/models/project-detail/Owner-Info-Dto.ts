/* Type checking. */
import IOwnerInfoDto from "../../../typescript/interfaces/dto/owner-info/IOwner-Info-Dto";

const _companyName = new WeakMap();
const _dic = new WeakMap();
const _ico = new WeakMap();
const _street = new WeakMap();
const _city = new WeakMap();
const _zipCode = new WeakMap();
const _email = new WeakMap();

/**
 * @class OwnerInfoDto => Dto object that is beign send when updating owner info entity or fetching this type of entity.
 */
class OwnerInfoDto implements IOwnerInfoDto {
  getCompanyName: () => string;
  getIco: () => string;
  getDic: () => string;
  getStreet: () => string;
  getCity: () => string;
  getZipCode: () => any;
  getEmail: () => any;
  setCompanyName: (companyName: string) => void;
  setDic: (dic: string) => void;
  setIco: (ico: string) => void;
  setStreet: (street: string) => void;
  setCity: (city: string) => void;
  setZipCode: (zipCode: string) => void;
  setEmail: (email: string) => void;
  constructor(
    companyName: string,
    dic: string,
    ico: string,
    street: string,
    city: string,
    zipCode: string,
    email: string
  ) {
    _companyName.set(this, companyName);
    _dic.set(this, dic);
    _ico.set(this, ico);
    _street.set(this, street);
    _city.set(this, city);
    _zipCode.set(this, zipCode);
    _email.set(this, email);

    /* Behavior. */
    this.getCompanyName = () => {
      return _companyName.get(this);
    };

    this.setCompanyName = (companyName: string) => {
      _companyName.set(this, companyName);
    };

    this.getDic = () => {
      return _dic.get(this);
    };

    this.setDic = (dic: string) => {
      return _dic.set(this, dic);
    };

    this.getIco = () => {
      return _ico.get(this);
    };

    this.setIco = (ico: string) => {
      _ico.set(this, ico);
    };

    this.getStreet = () => {
      return _street.get(this);
    };

    this.setStreet = (street: string) => {
      _street.set(this, street);
    };

    this.getCity = () => {
      return _city.get(this);
    };

    this.setCity = (city: string) => {
      _city.set(this, city);
    };

    this.getZipCode = () => {
      return _zipCode.get(this);
    };

    this.setZipCode = (zipCode: string) => {
      _zipCode.set(this, zipCode);
    };

    this.getEmail = () => {
      return _email.get(this);
    };

    this.setEmail = (email: string) => {
      _email.set(this, email);
    };
  }
}

export default OwnerInfoDto;
