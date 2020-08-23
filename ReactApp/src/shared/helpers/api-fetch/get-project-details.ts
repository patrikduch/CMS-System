import { getDetails } from "../../api/end-points/Project-Detail-API";

/**
 * @function getProjectDetails => Fetch project details (project name, domain url etc.)
 * This fetch functionality is used when we dont want to use Redux lirary to persists provided data.
 */
const getProjectDetails = async () => {
  const response: {
    data: {
      companyName: string;
      name: string;
      domainUrl: string;
      theme: string;
    };
  } = await getDetails();
  return {
    companyName: response.data.companyName,
    domainUrl: response.data.domainUrl,
    projectName: response.data.name,
    theme: response.data.theme,
  };
};

export default getProjectDetails;
