import React from "react";
import keyGen from "../../key-generator";
import HeaderContainer from "../../../../components/client-app/skeleton/Header-Container";

import ModulesFetcher from "../Modules-Fetcher";
import ModuleSystemType from "../../../../../typescript/types/app/models/Module-System-Type";

/* Tyoe-checking for fetched modules */
import SectionType from "../../../../../typescript/enums/shared/helpers/dynamic-rendering/Section-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  modules: ModuleSystemType[];
  themeCode: string;
}

/**
 * @function ModuleHeaderLoader => Rendering set of header components.
 */
const ModuleHeaderLoader: React.FC<IProps> = (props: IProps) => {
  if (props.modules == null) return <div key={keyGen()} />;
  
  return (
    <HeaderContainer key={keyGen()}>
      <ModulesFetcher
        key={keyGen()}
        modules={props.modules}
        sectionType={SectionType.Header}
      />
    </HeaderContainer>
  );
};

export default ModuleHeaderLoader;
