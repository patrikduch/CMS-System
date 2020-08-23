import React from "react";

/* component type props */
type PropsType = {
  isEnabled: boolean;
};

/*
  Shared checker component for header, body and footer module if is enabled.
*/
const ModuleCheckerHoc: React.FC<PropsType> = ({ isEnabled, children }) => {
  return <>{isEnabled && children}</>;
};

export default ModuleCheckerHoc;
