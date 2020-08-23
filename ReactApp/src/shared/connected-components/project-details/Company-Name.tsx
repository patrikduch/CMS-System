import React from "react";

/* Component`s props interface. */
interface IProps {
  ownerInfo: {
    companyName: string;
  };
}

/**
 * @function CompanyName =>  Display only company name (Is used for example in Footer section - Landing page)
 * @param ownerInfo => Object that contains property "company name".
 */
const CompanyName: React.FC<IProps> = ({ ownerInfo }) => {
  return <>{ownerInfo.companyName}</>;
};

export default CompanyName;
