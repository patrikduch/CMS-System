import { Container, Col, Row } from "reactstrap";
import HorizontalLineBasic from "../../../../../components/common/horizontal-lines/Horizontal-Line-Basic";
import keyGen from "../../../key-generator";
import ModuleCheckerHoc from "../../../../../hoc/Module-Checker-Hoc";
import MiddleModule from "../../body/sections/modules/Middle-Module";
import ModuleSystemType from "../../../../../../typescript/types/app/models/Module-System-Type";
import React from "react";
import styled from "styled-components";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  modules: ModuleSystemType[];
  subModules: ModuleSystemType[];
  className?: string;
}

/*
  Component that receives all modules for middle section of Body area.
*/
const ModuleBodyMiddleSection: React.FC<IProps> = (props: IProps) => {
  /**
   * @function renderSeparator => Render the horizontal separator line when middle modules are enabled by module system.
   */
  const renderSeparator = () => {
    const isLineDisplayed =
      props.modules.filter(
        (module: ModuleSystemType) => module.isEnabled && !module.isFeature
      ).length > 0;

    return isLineDisplayed ? (
      <HorizontalLineBasic />
    ) : (
      <div style={{ marginBottom: "10vh", minHeight: "10vh" }} />
    );
  };

  /* 
    Dynamic rendering of all middle modules.
  */
  const getContent = () => {
    // Check if at least one modul is enabled (write-us) and (recommend-us)
    return props.modules.map((module: ModuleSystemType) => {
      return (
        <ModuleCheckerHoc key={keyGen()} isEnabled={module.isEnabled}>
          <Col key={keyGen()} md="4">
            <MiddleModule
              key={keyGen()}
              moduleCode={module.code}
              modules={props.subModules}
            />
          </Col>
        </ModuleCheckerHoc>
      );
    });
  };
  return (
    <section>
      <Container className={props.className}>
        {renderSeparator()}
        <Row>{getContent()}</Row>
      </Container>
    </section>
  );
};

export default styled(ModuleBodyMiddleSection)`
  /* Section spacing for low-width devices. */
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    margin-top: 4.5vh;
  }
`;
