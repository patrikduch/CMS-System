import React from "react";
import PageTitle from "../../components/common/title/Page-Title";
import { Container } from "reactstrap";

/**
 * @function ContactAdminPage => Display information about author in Administration.
 */
const ContactAdminPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>Autor</PageTitle>
      <p>Jméno a přijmení: Patrik Duch</p>
      <p>E-mail: duchpatrik@icloud.com</p>
    </Container>
  );
};

export default ContactAdminPage;
