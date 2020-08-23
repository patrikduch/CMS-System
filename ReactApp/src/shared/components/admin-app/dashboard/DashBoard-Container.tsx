import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import SidebarContainer from "../sidebar/Sidebar-Container";
import SidebarContent from "../sidebar/content/Sidebar-Content";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  signout: () => void;
  authRoutes: ReactNode;
}

/**
 * @function AdminDashBoard => Dashboard component the encapsulates core dashboard`s functionality.
 * @param authRoutes => Passed component`s routes that are rendered if auth was succcessfull.
 */
const AdminDashBoard: React.FC<IProps> = ({ authRoutes, signout }) => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <AppWrapper>
        <SidebarContainer toggle={toggle} isOpen={isOpen} />
        <SidebarContent
          authRoutes={authRoutes}
          signout={signout}
          toggle={toggle}
          isOpen={isOpen}
        />
      </AppWrapper>
    </>
  );
};

const AppWrapper = styled.div`
  /* Content next to sidebar */
  display: flex;
  width: 100%;
  align-items: stretch;
`;

export default styled(AdminDashBoard)`
  font-family: "Quicksand", sans-serif;
`;
