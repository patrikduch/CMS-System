import React from "react";

/* Font awesome imports. */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import { CompanyNameContainer } from "../../redux/containers/owner-info/Owner-Info-Container";
import CopyrightAuthor from "./Copyright-Author";

/**
 * @function CopyrightModule => Displays copyright information (such as author name, company name etc.)
 */
const CopyrightModule: React.FC = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} &nbsp;
      <CompanyNameContainer />
      <CopyrightAuthor> Autor: Patrik Duch</CopyrightAuthor>
    </div>
  );
};

export default CopyrightModule;
