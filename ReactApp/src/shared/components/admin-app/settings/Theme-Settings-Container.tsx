import React from "react";
import { Container, Row, Col } from "reactstrap";
import ThemeChooserContainer from "../../../redux/containers/admin/settings/Theme-Chooser-Container";

import PageTitle from "../../common/title/Page-Title";

/**
 * @function ThemeSettingsContainer => Theme toggler that is part of administration portal.
 */
const ThemeSettingsContainer: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <PageTitle>Šablony</PageTitle>
          </Col>
        </Row>
        <ThemeChooserContainer />
      </Container>
    </>
  );
};

export default ThemeSettingsContainer;
