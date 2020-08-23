import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import IRouterConnectedComponentProps from "../../../../typescript/interfaces/shared/router/IRouter-Connected-Component-Props";

const ClassicTab: React.FC<IRouterConnectedComponentProps> = (
  props: IRouterConnectedComponentProps
) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      props.history.push(`/admin/articlepage/${tab}`);
    }
  };

  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("articles");
            }}
          >
            Články
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("categories");
            }}
          >
            Kategorie
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12"></Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6"></Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
};

export default withRouter(ClassicTab);
