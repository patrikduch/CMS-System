import React from "react";
import keyGen from "../../key-generator";

/* Footer section container */
import FooterContainer from "../../../../components/client-app/skeleton/Footer-Container";

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
 * @function ModuleFooterLoader => Component for processing Footer modules.
 * @param props
 */
const ModuleFooterLoader: React.FC<IProps> = (props: IProps) => {
  if (props.modules == null) return <div key={keyGen()} />;

  return (
    <>
      <FooterContainer key={keyGen()}>
        <ModulesFetcher
          modules={props.modules}
          sectionType={SectionType.Footer}
        />
      </FooterContainer>
    </>
  );
};

export default ModuleFooterLoader;
