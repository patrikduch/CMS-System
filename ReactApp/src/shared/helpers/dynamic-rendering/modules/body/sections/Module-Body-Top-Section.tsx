import React from "react";
import styled from "styled-components";
import keyGen from "../../../key-generator";

// Modules import
import DayNotificationModule from "../../../../../modules/body/day-notification/Day-Notification-Module";
import TopArticlesModule from "../../../../../modules/body/articles/Top-Articles-Module";
import { Col, Container, Row } from "reactstrap";

/* HOc checker for module state */
import ModuleCheckerHoc from "../../../../../hoc/Module-Checker-Hoc";
import ModuleSystemType from "../../../../../../typescript/types/app/models/Module-System-Type";

// Props interface
interface IProps {
  modules: ModuleSystemType[];
  className?: string;
}

/*
  Component that receives all modules for top section of Body area.
*/
const ModuleBodyTopSection: React.FC<IProps> = (props: IProps) => {
  /*
    Get JSX content of all enabled top modules.
  */
  const getTopModules = (moduleCode: string) => {
    switch (moduleCode) {
      case "day-notification":
        return <DayNotificationModule key={keyGen()} />;
      case "top-articles":
        return <TopArticlesModule key={keyGen()} />;
    }
  };

  /* 
  Dynamic rendering of all top modules
*/
  const getContent = () => {
    return props.modules.map((module: ModuleSystemType) => {
      return (
        <ModuleCheckerHoc key={keyGen()} isEnabled={module.isEnabled}>
          <Col key={keyGen()}>{getTopModules(module.code)}</Col>
        </ModuleCheckerHoc>
      );
    });
  };

  return <section className={props.className}>{getContent()}</section>;
};

export default styled(ModuleBodyTopSection)`
  min-height: 45vh;
`;
