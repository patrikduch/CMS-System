import React from "react";

import {
  ModuleSystemHeaderContainer,
  ModuleSystemFooterContainer,
} from "../redux/containers/module-system/Module-System-Container";

/* 
  Hoc Composer of Header and Footer content. All routes must be connected into this HOC for sharing Footer and Header.
*/
const HeaderFooterComposer: React.FC = ({ children }) => {
  return (
    <>
      <ModuleSystemHeaderContainer />
      {children}
      <ModuleSystemFooterContainer />
    </>
  );
};

export default HeaderFooterComposer;
