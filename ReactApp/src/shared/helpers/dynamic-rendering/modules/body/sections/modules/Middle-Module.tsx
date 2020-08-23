import React from "react";

/* Reactstrap imports... */
import { Container } from "reactstrap";

/* Utilities helpers. */
import keyGen from "../../../../key-generator";

/* Separate modules imports... */
import NewsletterModule from "../../../../../../modules/body/newsletter/Newsletter-Module";
import OwnerInfoModule from "../../../../../../modules/body/owner-info/Owner-Info-Module";
import WriteUsModule from "../../../../../../modules/body/write-us/Write-Us-Module";
import RecommendUsModule from "../../../../../../modules/body/recommends-us/Recommend-Us-Module";

/* Type checking. */
import ModuleSystemType from "../../../../../../../typescript/types/app/models/Module-System-Type";

// Type alias for component`s type checking.
type Props = {
  moduleCode: string; // Code of module to render
  modules: ModuleSystemType[];
};

/* Rendering nested modules Write to us and recommend-us. Because we dont now when iterating if both items are available */
const renderNestedModules = (moduleName: string) => {
  switch (moduleName) {
    case "write-us":
      return <WriteUsModule key={keyGen()} />;
    case "recommend-us":
      return <RecommendUsModule key={keyGen()} />;
  }
};

/**
 * @function MiddleModule => Modules of middle section
 * @param props => Properties that are passed into "MiddleModule" component for rendering middle modules on "Landing page".
 */
const MiddleModule: React.FC<Props> = (props: Props) => {
  switch (props.moduleCode) {
    case "newsletter-subscriber":
      return <NewsletterModule key={keyGen()} />;
    case "owner-info":
      return <OwnerInfoModule key={keyGen()} />;
    case "write-us":
      return (
        <Container key={keyGen()}>
          {props.modules.map((arg: ModuleSystemType) =>
            renderNestedModules(arg.code)
          )}
        </Container>
      );

    default:
      return null;
  }
};

export default MiddleModule;
