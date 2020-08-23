import NavigationBar from "../../../../components/client-app/header/navigation/navbar/Navigation-Bar";
import keyGen from "../../key-generator";
import React from "react";

/* HOc checker for module state */
import ModuleCheckerHoc from "../../../../hoc/Module-Checker-Hoc";
import ModuleSystemType from "../../../../../typescript/types/app/models/Module-System-Type";

// Props type
type PropsType = {
  modules: ModuleSystemType[];
};

/* 
  Template for generation of  Header`s modules content.
*/
const ModuleHeaderBlocks: React.FC<PropsType> = (props: PropsType) => {
  const renderContent = (moduleCode: string) => {
    /* Module is enabled => we can render this. */
    switch (moduleCode) {
      case "navigation-bar":
        return <NavigationBar key={keyGen()} />;

      default:
        return <div key={keyGen()} />;
    }
  };

  return (
    <>
      {props.modules.map((module: ModuleSystemType) => {
        return (
          <ModuleCheckerHoc key={keyGen()} isEnabled={module.isEnabled}>
            {renderContent(module.code)}
          </ModuleCheckerHoc>
        );
      })}
    </>
  );
};

export default ModuleHeaderBlocks;
