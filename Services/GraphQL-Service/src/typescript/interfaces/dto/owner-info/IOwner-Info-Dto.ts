/**
 * @interface IOwnerInfoDto contact for Owner info data transfer object.
 */
interface IOwnerInfoDto {
  getCompanyName(): string;
  setCompanyName(companyName: string): void;
  getIco(): string;
  getDic(): string;
  getStreet(): string;
  getCity(): string;
  getZipCode(): string;
  getEmail(): string;
}

export default IOwnerInfoDto;
