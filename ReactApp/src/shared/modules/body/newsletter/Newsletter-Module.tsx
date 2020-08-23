import React, { PureComponent, Component } from "react";
import PageSubtitle from "../../../components/common/title/Page-Subtitle";
import { Container } from "reactstrap";

/* Fontawesome imports. */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import NewsletterModuleForm from "./Newslette-Form";

/**
 * @function NewsletterModule =>  Newsletter subscriber functionality for body middle section.
 */
const NewsletterModule: React.FC = () => {
  return (
    <Container>
      <PageSubtitle>
        <FontAwesomeIcon size="lg" icon={faMailBulk} /> {""}
        Odběr novinek
      </PageSubtitle>
      <NewsletterModuleForm />
    </Container>
  );
};

export default NewsletterModule;
