import React, { useEffect, PureComponent, Component } from "react";
import ModuleHeaderLoader from "../../helpers/dynamic-rendering/modules/header/Module-Header-Loader";
import keyGen from "../../helpers/dynamic-rendering/key-generator";

/* Utilities helpers. */
import _ from "lodash";
import areArraysEqual from "../../helpers/data-types/array/deep-comparision/are-Arrays-Equal";

/* Type checking. */
import ModuleSystemHeaderProps from "../../../typescript/types/shared/connected-components/module-system/Module-System-Header-Props";

/**
 * @function ModuleSystemHeader => Rendering of all header modules.
 * @param modules => Set of modules for "Header" section.
 * @param projectDetail => Detail about project (fetched from database).
 */
const ModuleSystemHeader: React.FC<ModuleSystemHeaderProps> = ({
  modules,
  projectDetail,
}) => {
  return (
    <ModuleHeaderLoader
      themeCode={projectDetail.themeCode}
      key={keyGen()}
      modules={modules}
    />
  );
};

export default React.memo(
  ModuleSystemHeader,
  (
    previousProps: ModuleSystemHeaderProps,
    nextProps: ModuleSystemHeaderProps
  ) => {
    const isEqual = areArraysEqual(
      previousProps.modules as [],
      nextProps.modules as []
    );
    return isEqual;
  }
);
