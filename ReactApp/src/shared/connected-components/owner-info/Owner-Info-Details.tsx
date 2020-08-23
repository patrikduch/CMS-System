import React, { useEffect } from "react";

import PageSubtitle from "../../components/common/title/Page-Subtitle";

import styled from "styled-components";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ParagraphBasic from "../../components/common/paragraphs/Paragraph-Basic";
import { Container } from "reactstrap";

/* Fontawesome imports. */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  ownerInfo: {
    companyName: string;
    contactInfo: {
      street: string;
      zipCode: string;
      city: string;
    };
  };

  actions: {
    fetchOwnerInfoDetails: () => void;
  };
}

/**
 * @function OwnerInfoDetails => Display information about owner of this product. At the bottom section of Landing page.
 * @param props => passed props data.
 */
const OwnerInfoDetails: React.FC<IProps> = (props: IProps) => {
  useEffect(() => {
    // Component did mount
    props.actions.fetchOwnerInfoDetails();
  }, []);

  return (
    <Container>
      <div className={props.className}>
        <PageSubtitle>
          <FontAwesomeIcon icon={faBriefcase} size="lg" /> {""}
          Provozovatel
        </PageSubtitle>
        <ParagraphBasic>{props.ownerInfo.companyName}</ParagraphBasic>
        <ParagraphBasic>{props.ownerInfo.contactInfo.street}</ParagraphBasic>
        <ParagraphBasic>{props.ownerInfo.contactInfo.zipCode}</ParagraphBasic>
        <ParagraphBasic>{props.ownerInfo.contactInfo.city}</ParagraphBasic>
      </div>
    </Container>
  );
};

export default styled(OwnerInfoDetails)`
  /* Spacing only for low resolution devices. */
  @media (max-width: 700px) {
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
  }
`;
