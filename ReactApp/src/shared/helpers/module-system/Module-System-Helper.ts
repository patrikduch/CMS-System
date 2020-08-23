import _ from "lodash";

import ModuleSystemType from "../../../typescript/types/app/models/Module-System-Type";

/**
 * @function getModulesFromArray => Get modules that will be deleted based on first numeric array argument.
 * @param ids =>  Numeric array that consists from identifiers of module system items.
 * @param modules => Items of module system from which will be removed particular numeric identifiers.
 */
export const getModulesFromArray = (
  ids: number[],
  modules: ModuleSystemType[]
) => {
  const result = modules.filter((arg: ModuleSystemType) => {
    const currentId = ids.find((arg2: number) => arg2 == arg.id);

    return arg.id != currentId;
  });

  return result;
};

/*
 * @function turnOffModule => Hide content of module when is turned off via Administration portal.
 * @param stateArray => Current Redux store array that will be mutated.
 * @param newDataArray => New data that will be applied on Redux store object.
 * @returns Numeric identifiers that represents id of modules or features.
 */
export const getTurnedOffModules = (
  stateArray: ModuleSystemType[],
  newDataArray: ModuleSystemType[]
) => {
  const idsArray = [] as number[];

  stateArray.forEach((arg1: ModuleSystemType) => {
    const element = newDataArray.find(
      (arg: ModuleSystemType) => arg.id === arg1.id
    );

    if (element == undefined) {
      return;
    }

    const firstObject = {
      id: arg1.id,
      name: arg1.name,
      code: arg1.code,
      isEnabled: arg1.isEnabled
    };

    const secondObject = {
      id: element.id,
      name: element.name,
      code: element.code,
      isEnabled: element.isEnabled
    };

    if (_.isEqual(firstObject, secondObject)) {
    } else {
      //stateArray = stateArray.filter(e => e.id != element.id);
      idsArray.push(element.id);
    }
  });

  return idsArray;
};

/**
 * @function getModules => Get modules by section its placement.
 * @param moduleFeatures => Array of all modules and features from which will be selected particual subset.
 * @param sectionId => Numeric identifier of section (Header =1, Body = 2, Footer = 3)
 */
export const getModules = (
  moduleFeatures: ModuleSystemType[],
  sectionId: number
) => {
  return moduleFeatures.filter(
    (arg: ModuleSystemType) => arg.sectionId == sectionId
  );
};
