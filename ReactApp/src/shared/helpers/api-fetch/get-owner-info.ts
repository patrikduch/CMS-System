import { getOwnerInfoDetails } from "../../api/end-points/Owner-Info-API";

/**
 * @function getOWnerInfo => Fetch information about owner info (company name, owner email address etc.)
 * This fetch functionality is used when we dont want to use Redux lirary to persists provided data.
 */
const getOwnerInfo = async () => {
  const response = await getOwnerInfoDetails();
  return {
    companyName: response.data.companyName,
    email: response.data.email,
  };
};

export default getOwnerInfo;
