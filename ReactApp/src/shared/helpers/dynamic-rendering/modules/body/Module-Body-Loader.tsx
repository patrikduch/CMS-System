import React, { useState } from "react";
import keyGen from "../../key-generator";

/* Encapsulated component which consists some basic styles for body starting point */
import BodyContainer from "../../../../components/client-app/skeleton/Body-Container";

import ModulesFetcher from "../Modules-Fetcher";
import SectionType from "../../../../../typescript/enums/shared/helpers/dynamic-rendering/Section-Type";
import ModuleSystemType from "../../../../../typescript/types/app/models/Module-System-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  modules: ModuleSystemType[];
  themeCode: string;
}

/**
 * @function ModuleBodyLoader => Processing Body modules.
 * This component will receive all modules for body section and separate them into sub sections (Top, Middle, Bottom).
 * Firstly is needed to recalculate the modules into specific sections and the the correct modules are passed into Top, Middle, Bottom
 * sections.
 * @param props
 */
const ModuleBodyLoader: React.FC<IProps> = (props: IProps) => {
  if (props.modules == null) return <div key={keyGen()} />;

  return (
    <BodyContainer key={keyGen()}>
      <ModulesFetcher modules={props.modules} sectionType={SectionType.Body} />
    </BodyContainer>
  );
};

export default ModuleBodyLoader;
