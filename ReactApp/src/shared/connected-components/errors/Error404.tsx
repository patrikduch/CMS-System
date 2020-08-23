import React from "react";
import Error404Logo from "../../components/common/errors/404/Error404-Logo";
import Error404Props from "../../../typescript/types/shared/connected-components/errors/Error404-Props";
import useDidMount from "../../hooks/dom/component.didmount.hook";

/**
 * @function Error404 => Connected redux component for handling Error 404.
 */
const Error404: React.FC<Error404Props> = ({
  moduleSystemActions,
  ownerInfoActions,
  projectDetailActions,
}) => {
  useDidMount(() => {
    moduleSystemActions.fetchModulesFeatures();
    ownerInfoActions.fetchOwnerInfoDetails();
    projectDetailActions.fetchProjectDetail();
  });

  return <Error404Logo />;
};

export default Error404;
