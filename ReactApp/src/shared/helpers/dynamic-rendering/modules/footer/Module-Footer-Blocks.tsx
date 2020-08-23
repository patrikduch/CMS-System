import React from "react";
import keyGen from "../../key-generator";

import Copyright from "../../../../modules/footer/Copyright-Module";
import CookieConsent from "../../../../modules/footer/Cookie-Consent-Module";

/* HOc checker for module state */
import ModuleCheckerHoc from "../../../../hoc/Module-Checker-Hoc";

import styled from "styled-components";
import ModuleSystemType from "../../../../../typescript/types/app/models/Module-System-Type";

/* */
type PropsType = {
  modules: ModuleSystemType[];
};

/* 
  Template for generation of  Header`s modules content.
*/
const ModuleFooterBlocks: React.FC<PropsType> = (props: PropsType) => {
  /*
			Main entry method for rendering footer`s modules.
		*/
  const renderContent = (moduleCode: string) => {
    switch (moduleCode) {
      case "copyright":
        return <Copyright key={keyGen()} />;

      case "cookie-consent":
        return <CookieConsent key={keyGen()} />;

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

export default styled(ModuleFooterBlocks)``;
