import * as requestUtils from "../Request-Utils";
import OwnerInfoTypeModel from "../../../typescript/types/app/models/Owner-Info-Type-Model";

/**
 * @function getOwnerInfoDetails => Get all information about current owner of project. (company name, dic, ico, street, city, zip code and e-mail).
 */
export const getOwnerInfoDetails = () => {
  return requestUtils.sendGet("/ownerinfo/details", false);
};

/**
 * @function updateOwnerInfo => Update owner info details.
 * @param obj => Object that represents new owner info details.
 */
export const updateOwnerInfo = (obj: OwnerInfoTypeModel) => {
  return requestUtils.sendPut(
    "/ownerinfo/update",
    {
      companyName: obj.companyName,
      dic: obj.dic,
      ico: obj.ico,
      street: obj.street,
      city: obj.city,
      email: obj.email,
      zipCode: obj.zipCode,
    },
    false
  );
};
