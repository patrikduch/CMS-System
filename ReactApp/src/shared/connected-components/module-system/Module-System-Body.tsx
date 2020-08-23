import React, { useEffect } from "react";
import ModuleBodyLoader from "../../helpers/dynamic-rendering/modules/body/Module-Body-Loader";

/* Utilities helpers. */
import keyGen from "../../helpers/dynamic-rendering/key-generator";
import _ from "lodash";
import areArraysEqual from "../../helpers/data-types/array/deep-comparision/are-Arrays-Equal";

/* Type checking. */
import ModuleSystemBodyProps from "../../../typescript/types/shared/connected-components/module-system/Module-System-Body-Props";

/**
 * @function ModuleSystemBody => Render list of body modules.
 * @param modules => Set of body modules.
 * @param projectDetail => Information about project.
 */
const ModuleSystemBody: React.FC<ModuleSystemBodyProps> = ({
  modules,
  projectDetail,
}) => {

  debugger;

  return (
    <ModuleBodyLoader
      themeCode={projectDetail.themeCode}
      key={keyGen()}
      modules={modules}
    />
  );
};

export default React.memo(
  ModuleSystemBody,
  (previousProps: ModuleSystemBodyProps, nextProps: ModuleSystemBodyProps) => {
    const isEqual = areArraysEqual(
      previousProps.modules as [],
      nextProps.modules as []
    );
    return isEqual;
  }
);
