import React from "react";
import ModuleFooterLoader from "../../helpers/dynamic-rendering/modules/footer/Module-Footer-Loader";
import keyGen from "../../helpers/dynamic-rendering/key-generator";

/* Type checking. */
import ModuleSystemFooterProps from "../../../typescript/types/shared/connected-components/module-system/Module-System-Footer-Props";

/**
 * @function ModuleSystemFooter Component that passed redux module data into module footer loader, which then is used
 *  to process provided data.
 * @param projectDetail => Object that represents details about project.
 * @param modules => List of footer`s modules.
 */
const ModuleSystemFooter: React.FC<ModuleSystemFooterProps> = ({
  projectDetail,
  modules
}) => {
  return (
    <>
      <ModuleFooterLoader
        themeCode={projectDetail.themeCode}
        key={keyGen()}
        modules={modules}
      />
    </>
  );
};

export default ModuleSystemFooter;
