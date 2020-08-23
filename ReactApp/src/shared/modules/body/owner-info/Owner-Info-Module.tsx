import React from "react";

// Redux connect component to display owner info`a details.
import { OwnerInfoContainer } from "../../../redux/containers/owner-info/Owner-Info-Container";

/* 
  Displays information about owner of this website.
*/
const OwnerInfoModule: React.FC = () => {
  return (
    <>
      <OwnerInfoContainer />
    </>
  );
};

export default OwnerInfoModule;
