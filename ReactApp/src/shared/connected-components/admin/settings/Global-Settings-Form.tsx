import React, { SyntheticEvent } from "react";
import { Container, Form, Row, Col } from "reactstrap";
import PageTitle from "../../../components/common/title/Page-Title";
import { AdminProjectNameContainer } from "../../../redux/containers/project-details/Project-Details-Container";
import {
  AdminContactOwnerInfoContainer,
  AdminBasicOwnerInfoContainer,
} from "../../../redux/containers/owner-info/Owner-Info-Container";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import BaseBootstrapButton from "../../../components/common/buttons/Base-Bootstrap-Button";

import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* Component`s props interface. */
interface IProps extends IStyledComponentProps {
  projectDetail: {
    projectName: string;
  };

  ownerInfo: {
    companyName: string;
    ico: string;
    dic: string;
    contactInfo: {
      street: string;
      city: string;
      zipCode: string;
      email: string;
    };
  };

  actions: {
    updateProjectDetail: Function;
  };

  ownerInfoActions: {
    fetchOwnerInfoDetails(): void;
    updateOwnerInfoField: Function;
  };
}

/**
 * @function GlobalSettingsForm => Component for displaying Global settings form (admin section).
 * @param props
 */
const GlobalSettingsForm: React.FC<IProps> = (props: IProps) => {
  useDidMount(() => {
    props.ownerInfoActions.fetchOwnerInfoDetails();
  });

  const processForm = (event: SyntheticEvent) => {
    // Dont use default behavior of forms
    event.preventDefault();

    props.ownerInfoActions.updateOwnerInfoField({
      companyName: props.ownerInfo.companyName,
      ico: props.ownerInfo.ico,
      dic: props.ownerInfo.dic,
      street: props.ownerInfo.contactInfo.street,
      city: props.ownerInfo.contactInfo.city,
      zipCode: props.ownerInfo.contactInfo.zipCode,
      email: props.ownerInfo.contactInfo.email,
    });

    props.actions.updateProjectDetail({
      name: props.projectDetail.projectName,
    });
  };

  return (
    <Container className={props.className}>
      <Form onSubmit={processForm}>
        <Row>
          <PageTitle>Nastavení</PageTitle>
        </Row>

        <Row>
          <Col md="6">
            <AdminProjectNameContainer />
            <AdminContactOwnerInfoContainer />
          </Col>
          <Col md="6">
            <AdminBasicOwnerInfoContainer />
          </Col>
        </Row>
        <BaseBootstrapButton onMouseEnterAction={processForm}>
          Uložit změny
        </BaseBootstrapButton>
      </Form>
    </Container>
  );
};

export default styled(GlobalSettingsForm)`
  margin-bottom: 15vh;
`;
